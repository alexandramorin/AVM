/* Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210) */
var count = 0;



function countShow(){
    function count(){
        let totalCount = 0;
        let productIds = 1;
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
        document.getElementById('count').innerHTML=count;
        localStorage.setItem('count', count);
    }
    console.log(count)
}   


// remove the .count when no items in cart
// when add item in cart, need to update the number .count without page refresh

