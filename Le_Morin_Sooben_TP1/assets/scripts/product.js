function start(){

//Code provenant de  https://www.sitepoint.com/get-url-parameters-with-javascript/
//


const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const ids = urlParams.get('id')
console.log(ids);

//
items=[]

$.getJSON("assets/data/products.json", 


function(data){

    
    items.push('\
     <body>\
  <div class="wrapper">\
    <header>\
      <div class="content">\
        <img class="logo" src="assets/img/logo.svg" alt="Logo"/>\
        <nav>\
          <ul class="nav_links">\
            <li><a href="./index.html">Accueil</a></li>\
            <li><a class="active" href="./products.html">Produits</a></li>\
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
    </header\
      <div class="content_product">\
      <div class="row">\
        <br></br>\
        ');
        let boo=false
        let pass="t"
        finalval="hrllo";
        $.each(data, function (key, val) {
        
         m=val.id+""

         if (m==ids){
           
         boo=true  
         pass="f"

         finalval=val.name 

   

         items.push('<h2 class="name_product">'+val.name+'</h2><div class="col">')
         items.push('<img src="./assets/img/'+val.image+'" height="400px"/></div><div class="col">')
         items.push('<h3>Description</h3><br>')
         items.push('<blockquote style="text-align:justify; width:550px;">'+val.description+'</blockquote>')
         items.push('<br><h3>Caractéristiques</h3><br><ul class="characteristics">')

         for (let y=0; y<(val.features.length); y++){

            items.push('<li>'+val.features[y]+'</li>')


         }
       
        
         items.push('<br><hr class="line_product"><p class="price_product">Prix: <strong>'+val.price+' $</strong></p>')
         items.push('<form class="add" id="add-to-cart-form">')
         items.push('<label for="quantity">Quantité:</label> &nbsp;')
         items.push('<input class="form-box" type="number" id="quantity" name="quantity" min="1" step="1" value="1" required> &nbsp;')
         items.push('<button class="btn" onclick="generateSticker()"><i class="fas fa-cart-plus"></i> &nbsp; Ajouter>></button>')
         items.push('</form>')
         
      
         items.push('</div></div></div></main><div class="push"></div></div></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><footer class="footer"><p>\
              Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210)</p></footer>\
              </body>');

              $("<ul/>", {
                  "class": "my-new-list",
                  html: items.join("")
              }).appendTo("body");

            
            }
            
            
            
         });

         if (boo==false && pass=="f"){


            items.push('<h2>Page non trouvée!</h2><div class="col">')

            items.push('</div></div></div></main><div class="push"></div></div></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><footer class="footer"><p>\
            Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210)</p></footer>\
            </body>');

            $("<ul/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo("body");

          
           
         }

         
        

})
}

function generateSticker(){



  //https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit

  $(".add").submit(function(e) {
    e.preventDefault();
});

var quantity = document.getElementById('quantity').value;

localStorage.setItem(finalval, quantity);

}
start();
//Pour permettre au DOM de load
setTimeout(() => {  
}, 5);
