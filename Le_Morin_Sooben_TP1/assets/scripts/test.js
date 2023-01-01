$(".btn").on("click", function setItems(val){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let itemId = val.id;
    let itemName = val.name;
    let itemPrice = val.price;
    let itemQuantity = document.getElementById('quantity').value;
    let total_amountCost = itemPrice * itemQuantity;
    let itemURL = urlParams;
    let key = itemName;
     console.log(cart); console.log(val);
    
    if (cart === null) {
      cart = [];
    }
  
    const itemExists = cart.find(item => {
      if(item.id === itemId) {
        item.quantity += itemQuantity;
        return true;
      }
      return false;
    })
  
    let cartItem = {
      id: itemId,
      name: itemName,
      price : itemPrice,
      quantity: itemQuantity,
      total_amount : total_amountCost,
      url: itemURL
    };
  
    if (!itemExists) {
      cart.push(cartItem);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    
  })
  cart = JSON.parse(localStorage.getItem('cart'));
if (cart == null){

}
   itemId = val.id;
   itemName = val.name;
  itemPrice = val.price;
  itemQuantity = document.getElementById('quantity').value;
   total_amountCost = itemPrice * itemQuantity;
   itemURL = urlParams;
  //let key = itemName;
   //console.log(cart); console.log(val);
  
  if (cart === null) {
    cart = [];
  }

  const itemExists = cart.find(item => {
    if(item.id === itemId) {
      item.quantity += itemQuantity;
      return true;
    }
    return false;
  })

  let cartItem = {
    id: itemId,
    name: itemName,
    price : itemPrice,
    quantity: itemQuantity,
    total_amount : total_amountCost,
    url: itemURL
  };

  if (!itemExists) {
    cart.push(cartItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  // modify the count each time an item is added to the cart


  $.each(data, function(key, val){
    itemsSorted.push(val.name);
});
console.log(itemsSorted);
items.sort()
console.log(itemsSorted)
