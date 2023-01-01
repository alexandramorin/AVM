/* Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210) */
function show(){
    let number = 1;
    let order = localStorage(number+"_order");
    function orderNumber(){
        do {
            number ++;
            order = localStorage.getItem(number+"_order");
        } while(order!= null);
        return order;
    }
    function hideCount(){
        $("span.count").hide();
    }
    let finalOrder = orderNumber();
    const identity = JSON.parse(finalOrder);
    
    document.getElementsById('name').innerText = "Votre commande est confirmée" + identity[0] + identity[1];
    document.getElementsById('confirmation-number').innerText = "Votre numéro de commande est le" + number;
}