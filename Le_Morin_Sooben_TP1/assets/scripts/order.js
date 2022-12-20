/* Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210) */

$(function(){
    $('#order-form').validate({
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
                
            }
        },
        messages:{
            firstname, lastname:{
                required: "Ce champ est obligatoire.",
                minlength: jQuery.validator.format("Veuillez fournir au moins 2 caractères.") 
            },
            email:{
                required: "Ce champ est obligatoire.",
                email: "Votre adresse courriel doit etre dans le format nom@domaine.com."
            },
            phone:{
                required: "Ce champ est obligatoire.",
                phoneUS: "Votre numero de telephone doit etre dans le format +1 ###-###-####."
            },
            creditcard:{
                required: "Ce champ est obligatoire.",
                creditcard: "Votre numero de carte de credit doit etre dans le format **** **** **** ****."
            },
            creditcardexpiry:{
                required: "Ce champ est obligatoire.",
                expiry: "La date d'expiration de votre carte de credit est invalide."
            }

        }
    })
    jQuery.validator.addMethod("date", function(creditcardexpiry, element) {
        return this.optional(element) || /^(([0-1]{1})(\d{1}))\/(\d{2})$/.test(value);
    })
    
})