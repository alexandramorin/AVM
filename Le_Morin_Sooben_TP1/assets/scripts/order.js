/* Alexandra Morin (20236038), Vennila Sooben (20235256) et Melissa Le (20163210) */

$(document).ready(function(){
    var $registerForm = $("#order-form");
    jQuery.validator.addMethod("expirydate", function(value, element) {
        return this.optional(element) || /^(([0-1]{1})(\d{1}))\/(\d{2})$/.test(value);
    })
    if($registerForm.length){
        $registerForm.validate({
            rules: {
                fname, lname:{
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
            messages:{
                fname, lname:{
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
                    expirydate: "La date d'expiration de votre carte de credit est invalide."
                }

            }
    })
    }
    
    
})