const items=[];
const item=[];
const id=[];
const newid=[];


$.getJSON("assets/data/products.json", 

//localStorage.setItem("count",0),

function(data){

   //localStorage.setItem("count",0)

    $.each(data, function (key, val) {
                                                 
        items.push(val.name);
        item.push(parseFloat(val.price))
        id.push(val.id)

    });
  
});


function start(){
    let sums=0
    var present=false
    var sum=0.0;
    var tot=0.0;
    for (let y=0; y<items.length; y++){

    let check=localStorage.getItem(items[y]);

        if (check!=null){

            present=true;
          

        };
        
    };

console.log(present)

    if (present==false){
       
        let c=document.getElementsByClassName("tableau")[0]
                c.innerHTML+="<p id='noprod' style='display='''>Pas de produits dans le panier</p><br>"
        console.log("Done; noprod")

        let d=document.getElementsByTagName("hr")[0]
d.remove()

let e=document.getElementsByTagName("hr")[0]
e.remove()

let f=document.getElementById("removess")
f.style.display="none"

let g=document.getElementById("removesss")
g.style.display="none"

            };

if (present==true){
    console.log("OK")

    let c=document.getElementById("noprod")
if (c!=null){
    c.remove();
    let f=document.getElementById("removess")
f.style.display=""

let g=document.getElementById("removesss")
g.style.display=""
}
str="<div class='remove1'><tr>\
<th class='remove1'> </th> <!-- espace pour mettre le x -->\
<th  class='categorieleft remove1'>Nom</th>\
<th class='categories remove1'>Prix unitaire</th>\
<th  class='categories remove1'>Quantité</th>\
<th class='categorieright remove1'>Prix</th>\
</tr>\
";

    for (let y=0; y<items.length; y++){

        let m=localStorage.getItem(items[y])
    if (m==null){

        newid.push(null)
    }
    if (m!=null){
       
newid.push(id[y])
     
    let tot=item[y]*parseFloat(m);

        sum=parseFloat(sum)+parseFloat(tot);
        
        
        prod=addition(items[y])
      
        
        if (document.getElementsByTagName("tbody")[1] !=null && document.getElementsByTagName("br")[1]!=null && document.getElementsByTagName("br")[2]!=null){
            
            const box = document.getElementsByTagName("tbody")[0];
             box.remove()
 
             const bo = document.getElementsByTagName("tbody")[0];
             bo.remove()
            const boxs = document.getElementsByTagName("br")[0];
            boxs.remove()
            const boxss = document.getElementsByTagName("br")[0];
            boxss.remove()
            const boxsss = document.getElementsByTagName("br")[0];
            boxsss.remove()
            
            
            }


str=str+"\
<tr class='remove1' id='forremoval"+prod+"'><td><form action=''>\
<input class='circle' type='reset' value='x' onclick=removal('"+prod+"')>\
</form></td>\
<td><a href='./product.html?id="+newid[y]+"' class='bluetext'><br>"

str=str+items[y]

str=str+"</a></td>\
<td class='center'>"+item[y]+" $</td>\
<td class='center' id='whole"+prod+"'><button type='button' class='circle' onclick=decr("+m+",'"+prod+"')>-</button><i id=changenum"+prod+">        "+m+"       </i><button type='button' class='circle' onclick=incr("+m+",'"+prod+"')>+</button></td>\
<td class='right'>"+tot+" $</td></tr>"


}

}
str=str+"<br>"
let r=document.getElementsByClassName("tableau")[0];

    r.innerHTML+=str;
  
    (Math.round(sum * 100) / 100).toFixed(2);



    let r2=document.getElementsByClassName("total")[0];

r2.innerHTML+= "<p class='grandtot remove1'>Total: <b>"+sum.toFixed(2)+" $</b></p></div>"




}

};


function addition(name){

    let newword=""
    for (let y=0; y<name.length; y++){
 
 
     let tryval=name.substr(y,1)

     if (tryval!=" "){
 
 
 
         newword=newword+tryval
 
 
 
     }
     else{newword=newword+"_"}
 
 
 
 
 
    }
    console.log(newword)
 return newword






}


function search(name){

let newword=""
   for (let y=0; y<name.length; y++){


    let tryval=name.substr(y,1)

    if (tryval!="_"){



        newword=newword+tryval



    }
    else{newword=newword+" "
    }





   }

return newword





}


function decr(m,y){
    set="forremoval"+y
    console.log("done");
    se="whole"+y;
   
    console.log(se);
    newquan=m-1;
   count=0

  

   
    newword=search(y);

        localStorage.setItem(newword,parseInt(newquan));
    
        const boxes = document.querySelectorAll('.remove1');

boxes.forEach(box => {
  box.remove();


});
if (newquan==0){

    
    
    localStorage.removeItem(newword)
    const boxes = document.querySelectorAll('.remove1');
    
    boxes.forEach(box => {
      box.remove();
    });
      }     
        setTimeout(() => {start()}, 5);
}

function incr(m,y){
    set="forremoval"+y
    console.log("done");
    se="whole"+y;
   
    console.log(se);
    newquan=m+1;
  
    
    newword=search(y);

        localStorage.setItem(newword,parseInt(newquan));
    
        const boxes = document.querySelectorAll('.remove1');

boxes.forEach(box => {
  box.remove();
});
       
        setTimeout(() => {start()}, 5);
}

setTimeout(() => {start()}, 5);

function removal(y){
    let text = "Voulez-vous supprimer le produit du panier?";
    if (confirm(text) == true) {
        
        newword=search(y)
       
        localStorage.removeItem(newword)
        const boxes = document.querySelectorAll('.remove1');
        
        boxes.forEach(box => {
          box.remove();
        });
          
            setTimeout(() => {start()}, 5);
    
    ;
    } 
    

}

function allremoval(){

    for (let y=0; y<items.length; y++){

        m=localStorage.getItem(items[y])

        if (m!=null){

            newword=search(items[y])
       
            localStorage.removeItem(newword)
            const boxes = document.querySelectorAll('.remove1');
            
            boxes.forEach(box => {
              box.remove();

            });
            

        }
    }
    start()
    setTimeout(() => {start()}, 2);

}
