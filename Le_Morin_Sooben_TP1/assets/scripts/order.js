/* Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210) */

$(document).ready(function(){
    var $registerForm = $("#order-form");
    jQuery.validator.addMethod("expirydate", function(value, element) {
        return this.optional(element) || /^(([0-1]{1})(\d{1}))\/(\d{2})$/.test(value);
    }, "La date d’expiration de votre carte de crédit est invalide.")
    
    $registerForm.validate({
        rules: {
            firstname, lastname:{
                required: true,
                minlength: 2
            },

            email:{
                required: true,
                email:true,
            },
            phone:{
                required: true,
                phoneUS: true
            },
            creditcard:{
                required: true, 
                creditcard: true
            },
            creditcardexpiry:{
                required: true,
                expirydate: true
                
            }
        }, 
        submitHandler: function(form) {
            form.submit();
        }
        // on submit, need to keep the first and last name as well as the order number in local storage, remove all items in cart

    })
    
    
    
})