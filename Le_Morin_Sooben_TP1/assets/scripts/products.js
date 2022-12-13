//Code javascript pour la page Products.html


const cam=3;
const con=4;
const ecr=2;
const ord=4;
const al=13;
let items=[];
let addCam=[];
let addCom=[];
let addCon=[];
let addScr=[];
let addAll=[];

function alldone(){
   
    
    $.getJSON("products.json", 

    function(data){

        
        items.push('\
        <div class="PRODUCTS">\
       <div class="wrapper">\
       <header>\
       <div class="content">\
        <img class="logo" src="assets/img/logo.svg" alt="Logo"/>\
        <nav>\
          <ul class="nav_links">\
            <li><a href="./index.html">Accueil</a></li>\
            <li><a  class="active" href="./products.html">Produits</a></li>\
            <li><a href="./contact.html">Contact</a></li>\
            <li class="special"><a class="shopping-cart" href="./shopping-cart.html" title="Panier">\
              <span class="fa-stack fa-lg">\
                <i class="fa fa-circle fa-stack-2x fa-inverse"></i>\
                <i class="fa fa-shopping-cart fa-stack-1x"></i>\
              </span>\
              <span class="count">3</span>\
            </a></li>\
        </ul>\
        </nav>\
      </div>\
    </header>\
        <main>\
        <div class="content">\
          <div class="CRITERIAS">\
             <div class="selected_products" >\
                <h3>Catégories</h3><br>\
                <button class="buttons1" id="ap" onclick="filterSelection(this.id, this.className)">Appareils Photo</button>\
                <button class="buttons1" id="con" onclick="filterSelection(this.id, this.className)">Consoles</button>\
                <button class="buttons1" id="ecr" onclick="filterSelection(this.id, this.className)">Écrans</button>\
                <button class="buttons1" id="ord" onclick="filterSelection(this.id, this.className)" >Ordinateurs</button>\
                <button class="buttons1" id="al" onclick="filterSelection(this.id, this.className)">Tous les produits</button>\
            </div>\
            <div class="selected_ranking">\
                <h3> Classement </h3>\
                <br><button class="buttons2" class="buttons" id="bh" onclick="filterSelection(this.id,this.className)"> Prix (bas-haut)</button>\
                <button class="buttons2"  id="hb" onclick="filterSelection(this.id, this.className)"> Prix (haut-bas)</button>\
                <button class="buttons2" id="az" onclick="filterSelection(this.id, this.className)"> Nom (A-Z)</button>\
                <button class="buttons2" id="za" onclick="filterSelection(this.id, this.className)"> Nom (Z-A)</button>\
            </div>\
          </div>\
          <div id="try" class="products_page">\
            <h2 align="left" id="prod">Produits</h2>\
            <h3 align="right" id="num">13 produits</h3>');
    
 
    
        $.each(data, function (key, val) {
                                                 
                  items.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                       + val.name + '</h4>');

                  items.push('<img src="./assets/img/'
                       + val.image + '"width="250" height="250"></img>');

                       items.push('<h5 class="price_products"> Prix '
                       + val.price + ' $ </h5></div>');

           




                       if (val.category=="computers") {

                        addCom.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                        + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                        '<h5 class="price_products"> Prix '
                        + val.price + ' $ </h5></div>');

                        addAll.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                        + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                        '<h5 class="price_products"> Prix '
                        + val.price + ' $ </h5></div>');

                       }

                       if (val.category=="cameras") {

                        addCam.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                                + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                                '<h5 class="price_products"> Prix '
                                + val.price + ' $ </h5></div>');

                                addAll.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                                + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                                '<h5 class="price_products"> Prix '
                                + val.price + ' $ </h5></div>');
 
                        }

                        if (val.category=="consoles") {

                            addCon.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                            + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                            '<h5 class="price_products"> Prix '
                            + val.price + ' $ </h5></div>');

                            addAll.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                            + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                            '<h5 class="price_products"> Prix '
                            + val.price + ' $ </h5></div>');
     
                            }

                            if (val.category=="screens") {

                                addScr.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                                + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                                '<h5 class="price_products"> Prix '
                                + val.price + ' $ </h5></div>');

                                addAll.push('<div class="case_products ' + val.category+ '" id="' + val.id+'"><a href="./product.html?id=#'+val.id+'"/><h4>'
                                + val.name + '</h4>'+'<img src="./assets/img/'+ val.image + '"width="250" height="250"></img>'+
                                '<h5 class="price_products"> Prix '
                                + val.price + ' $ </h5></div>');
         
                            }
         
                       
              });

              

      

              items.push('</div></div></div></main><div class="push"></div></div></div><br><br><br><br><br><br><br><br><br><footer class="footer"><p>\
              Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210)</p></footer>\
              </body>');

              $("<ul/>", {
                  "class": "my-new-list",
                  html: items.join("")
              }).appendTo("body");

            });

  
   
        }
        



 



          var boo1=false;
          var boo2=false;
          var claseee="3";
          var mmm=[];
          var c=0;
          var start=1;



          function colorBackFunction(id, clas) {
            
          
            id= '#' + id ;
          

            if (clas=="buttons2"){
                if ( (boo2==false )){

                    
               
                    
                const element = document.querySelector(id);
                
                element.style.backgroundColor = '#ddf2fb';

                element.classList.replace("buttons2", "buttons2_active")
    
                prev2 = id;
    
               

                boo2=true;
                }
    
                else
                
                    {
    
                        
                        
    
                        const el = document.querySelector(id);
                        
                        el.style.backgroundColor = '#ddf2fb';
                        el.classList.replace("buttons2", "buttons2_active")
                        
                        let elm=document.querySelector(prev2)
                        elm.classList.replace("buttons2_active", "buttons2")
                        
            
                        
                        const element = document.querySelector(prev2);
                        
                        element.style.backgroundColor = 'white';
    
                      
            
    
                        prev2 = id;
                        
                        
                         }
           
           
                 }





                 

            if (clas=="buttons1")
            {
                
                
                if ( (boo1== false)){
    
                   
                const element = document.querySelector(id);

                element.style.backgroundColor = '#ddf2fb';
    
                element.classList.replace("buttons1", "buttons1_active")
         
                prev1 = id;
    
               
    
                boo1=true;

                
    
                }
    
                else
                {



                    

                    const el = document.querySelector(id);
            
                    el.style.backgroundColor = '#ddf2fb';
                    
                    el.classList.replace("buttons1", "buttons1_active")

                    let elm=document.querySelector(prev1)
             
                        elm.classList.replace("buttons1_active", "buttons1")
                    
                    const element = document.querySelector(prev1);
                    
                    element.style.backgroundColor = 'white';

                    
        

                    prev1 = id;
                   
                    
                     }
                    }
               



                }





let prev=""
let sorts=[]
let count=0
let rev=0

function filterSelection(c,d) {
   
    colorBackFunction(c,d)
  

    if (c!="con" && c!="al" && c!="ap" & c!="ord" & c!="ecr"){
    
            let sel=document.querySelector(".buttons2_active")
        
        
            if (sel!=null && sel.id=="bh"){
                rev=0
             
            
            
            }
        if (sel!=null && sel.id=="hb"){
            rev=1
        
        }

        if (sel!=null && sel.id=="az"){
            rev=2
        
        }
        if (sel!=null && sel.id=="za"){
            rev=3
           
        
        }

       
        if (prev=="con"){
        
            sort(addCon, con, ".consoles", rev)
        
        }
        
        if (prev=="cam"){
        
            sort(addCam, cam, ".cameras", rev)
        
        }
        
        if (prev=="ecr"){
        
            sort(addScr, ecr, ".screens", rev)
        
        }
        
        if (prev=="com"){
        
            sort(addCom, ord, ".computers", rev)
        
        }
        
        if (prev=="al"){
        
            sort(addAll, al, ".case_products", rev)
        
        }

        if (prev==""){
           
            sort(addAll, al, ".case_products", rev)

        }
    }    
    
if (c=="con" || c=="al" || c=="ap" || c=="ord" || c=="ecr"){

let sel=document.querySelector(".buttons2_active")

if (sel!=null && sel.id=="bh"){
    rev=0


}

if (sel!=null && sel.id=="hb"){
    rev=1


}
if (sel!=null && sel.id=="az"){
    rev=2


}
if (sel!=null && sel.id=="za"){
    rev=3


}

    if (c=="con"){

       
       
       
        const n = document.getElementById("num")
        l=con + ' produits'
        n.innerHTML=l

        for (let y=0; y<13; y++){

            const elo = document.querySelectorAll(".case_products")[y];

            elo.style.display="none";


        }

        
    

            
        
         sort(addCon,con, ".consoles", rev)

        prev="con"

      
         
        };

if (c=="al"){

    const n = document.getElementById("num")
        l=al + ' produits'
        n.innerHTML=l

for (let t=0;t<13; t++){

    const e=document.querySelectorAll(".case_products")[t]

    e.style.display='';
}
prev="al"
sort(addAll, al, ".case_products", rev)

}
    if (c=="ap"){
        
        const n = document.getElementById("num")
        l=cam + ' produits'
        n.innerHTML=l


        for (let y=0; y<13; y++){

            const elo = document.querySelectorAll(".case_products")[y];

            elo.style.display="none";



        }


                 
        sort(addCam,cam, ".cameras", rev)


        

        prev="cam"
        
        };


        


            if (c=="ecr"){

                const n = document.getElementById("num")
        l=ecr + ' produits'
        n.innerHTML=l

                for (let y=0; y<13; y++){

                    const elo = document.querySelectorAll(".case_products")[y];

                    elo.style.display="none";


                }

               
                sort(addScr,ecr, ".screens", rev)
                 

                 prev="ecr"
        
                  
                };


                if (c=="ord"){


                    const n = document.getElementById("num")
        l=ord + ' produits'
        n.innerHTML=l

                    for (let y=0; y<13; y++){

                        const elo = document.querySelectorAll(".case_products")[y];

                        elo.style.display="none";


                    }

                    

                    
                   
                    sort(addCom,ord, ".computers", rev)

                        
                        
            prev="com"

                
};







                      
}
}




                    function sort(sorting, vari, info, rev){


                        let newP=[]
                        if (rev==0 || rev==1){
                           
                        for (let t =0; t<vari;t++){
                            if (vari!=al){
                            let y=document.querySelectorAll(info)[0]
                            
                            
                            y.remove()
                            }

                            if (vari==al){
                                let y=document.querySelectorAll(info)[0]
                              
                                y.remove()

                            

                                }

                           let u=sorting[t]
               
                           f=u.search("Prix ")
                           q=u.search("$")
                           p=u.slice(f+5, q-14)
               
                           newP.push(p)
          
               
                   
                           
                       }

               
               // Code pour trier en fonction des integers et non alphabetiquement
               //https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
               newP.sort(function(a, b) {
                           return a - b;
                         });
if (rev==1){
                         newP.reverse()
                        }
               
               let count=0
               let c=-1
               let newArr=[]
               
               while (count<vari){
               
               c=c+1
               
               if (c>vari-1){
                   c=0
               
               }
               
               
                           let u=sorting[c]
                          
                           f=u.search("Prix ")
                           q=u.search("$")
                           p=u.slice(f+5, q-14)
               
                           if (newP[count]==p){
               
                             
               
                               count=count+1
               
                               newArr.push(u)
               
               
                         }
               
                          
                           }
               
               
            
               
               
                       for (let a =0; a<vari;a++){
                   let u=newArr[a]
                           let y= document.getElementById("try")
                   
                   
                    y.innerHTML+=u
               
                           }
                         

                        
                    }

                    

                    if (rev==2 || rev==3){
                        for (let t =0; t<vari;t++){
                            if (vari!=al){
                            let y=document.querySelectorAll(info)[0]
                           
                            y.remove()
                            }

                            if (vari==al){
                                let y=document.querySelectorAll(info)[0]
                                
                                y.remove()

                              
                                }

                           let u=sorting[t]
               
                           f=u.search("<h4>")
                           q=u.search("</h4")
                           p=u.slice(f+4, q)
       
               
                           newP.push(p)
          
               
                   
                           
                       }

               
               // Code pour trier en fonction des integers et non alphabetiquement
               //https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
               newP.sort()
if (rev==3){
                         newP.reverse()
                        }
              
               let count=0
               let c=-1
               let newArr=[]
               
               while (count<vari){
               
               c=c+1
               
               if (c>vari-1){
                   c=0
               
               }
               
               
                           let u=sorting[c]
                          
                           f=u.search("<h4>")
                    q=u.search("</h4")
                    p=u.slice(f+4, q)

               
                           if (newP[count]==p){
               
                             
               
                               count=count+1
               
                               newArr.push(u)
               
               
                         }
               
                          
                           }
               
               
            
               
               
                       for (let a =0; a<vari;a++){
                   let u=newArr[a]
                           let y= document.getElementById("try")
                   
                   
                    y.innerHTML+=u
               
                           }
                         

                        
                    }

        
                }


       //Importer les produits         
        alldone();
             
             

        //Poure permettre au DOM de load
             setTimeout(() => {   clickButtonss();

                function clickButtonss() {
                   
                    
                    c=document.querySelector('#al')
                    
                    c.click();


                    d=document.querySelector('#bh')
                   
                    d.click();


                };
            }, 5);
 
