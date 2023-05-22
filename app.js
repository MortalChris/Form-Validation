document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const phoneNumber = document.getElementById("phone-number");
    
        form.addEventListener("submit", function(e) {
        e.preventDefault();
        formValidation();
        });
    
        function formValidation() {
        const usernameInput = username.value.trim();
    
        if (usernameInput === "" || usernameInput === null) {
            
                console.log("no worky");
        }
    
        // if (emailInput == ' ' || emailInput == null){
        // }
    
        // if (phoneNumberInput == ' ' || phoneNumberInput == null){
        // }
        }
    });
    