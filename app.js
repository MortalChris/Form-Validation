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
                const emailInput = email.value.trim();
                const phoneNumberInput = phoneNumber.value.trim();

                if (usernameInput === "" || usernameInput === null) {
                        setError(username);
                } else{
                        setSuccess(username);
                }


                if (emailInput === "" || emailInput === null) {
                        setError(email);
                } else if(!emailValid(emailInput)){
                        email.style.borderColor = "purple";
                } else{
                        setSuccess(email);
                }


                if (phoneNumberInput === "" || phoneNumberInput === null) {
                        setError(phoneNumber);
                } else{
                        setSuccess(phoneNumber);
                }
        }

        function emailValid(emailInput){
                const emailCharacters = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailCharacters.test(String(emailInput).toLowerCase());
        }


        function setError(element){
                removeSetError(element);
        
                const pErrorText = document.createElement("p");
                        pErrorText.className = "pErrorText";
                        pErrorText.textContent = element.id + " is not entered!";
                        pErrorText.style.color = "red";
                        element.style.borderColor = "red";
                const parentElement = element.parentElement;
                        parentElement.appendChild(pErrorText);
        }

        function setSuccess(element){
                removeSetError(element);
                console.log("im being called");
                element.style.borderColor = "rgb(0, 255, 0)";
        }

        function removeSetError(element){
                const currentsetError = element.parentElement.querySelectorAll(".pErrorText");
                for(let i = 0; i < currentsetError.length; i++){
                        currentsetError[i].remove();
                }
        }


});
