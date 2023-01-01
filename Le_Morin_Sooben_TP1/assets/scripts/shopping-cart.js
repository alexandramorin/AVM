/* Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210) */
var count = 0;
var itemsSorted = [];
      

var items = [];
var quantity;
var total_amount;
var currentId;

let productIds = 1;



function allDone(){
    $.getJSON("assets/data/products.json", function(data){   
    function compareStrings(a, b) {
        // Assuming you want case-insensitive comparison
            a = a.toLowerCase();
            b = b.toLowerCase();
        
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }
    
    function count(){
        let totalCount = 0;
        while (productIds < 12){
            var itemCount = parseInt(localStorage.getItem(productIds+"_cart"));
            if (localStorage.getItem(productIds+"_cart") != null){
                totalCount += itemCount;
            }
            productIds ++;
    
        }
        return totalCount;
        
    }    
    count = count();
    if (count == 0){
        $("span.count").hide();
    }
    else{
        document.getElementById('count').innerHTML=count
    }
    console.log(count)
    // trie les produits pour qu'ils soient en ordre alphabetique
    $.each(data, function (key, val){
        itemsSorted = data.sort(function(a, b) {
            return compareStrings(a.name, b.name);
            })
        //console.log(itemsSorted);
    })
    console.log(itemsSorted);

    if(count != 0){ 
        $.each(itemsSorted, function(keySort, valSort){
            currentId = valSort.id;
            quantity = parseInt(localStorage.getItem(currentId+"_cart"));
            console.log(quantity)
            if(!isNaN(quantity)){
                //console.log(isNaN(quantity) == false);
                items.push('<tr class="row">\
                <td><form action="">\
                  <input class="circle remove-item-button" type="reset" value="x">\
                </form></td>')
                items.push('<td><a href="./product.html?id='+currentId+'" class="bluetext"/>'+valSort.name+'</td>');
                items.push('<td class="center prices">'+ valSort.price+'$'+'</td>');
                items.push('<td class="center"><button type="button" class="circle remove-quantity-button quantity" onclick="removeQuantity()">-</button>'+ parseInt(quantity) 
                +'<button type="button" class="circle add-quantity-button" onclick=addQuantity()>+</button></td>');
                total_amount = quantity  * Number(valSort.price);
                items.push('<td class="right" id="total-amount">'+ total_amount+'$'+'</td></tr>');
            }
            

            
        })
    }   
    console.log(items)
    console.log($("#product-list-container")) 
    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("#product-list-container");

            
        

    })
    function deleteAll(){
        let msg=document.getElementById("message-delete")
        confirm(msg);
        msg.style.display=""

        setTimeout(() => { msg.style.display="none"; }, 5000);
    }
    
    
}
function removeQuantity(){
        quantity--;
        if (parseInt(quantity) != 0){
            localStorage.setItem(currentId+"_cart", quantity);
        }
        localStorage.removeItem(currentId+"_cart");
        
}
function addQuantity(){
    quantity++;
    localStorage.setItem(currentId+"_cart", quantity);
        
}


allDone();

//Pour permettre au DOM de load
setTimeout(() => { let msg=document.getElementById("message-delete"); msg.style.display="none" 
}, 5);
    
    
    
