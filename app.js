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
                        setError(username);
                        }else{
                                setSuccess(username);
                        }

                const emailInput = email.value.trim();
                        if (emailInput === "" || emailInput === null) {
                        setError(email);
                        }else{
                                setSuccess(email);
                        }

                const phoneNumberInput = phoneNumber.value.trim();
                        if (phoneNumberInput === "" || phoneNumberInput === null) {
                        setError(phoneNumber);
                        } else{
                                setSuccess(phoneNumber);
                        }
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
                removeSetError();
                console.log("im being called");
                element.style.borderColor = "green";
        }

        function removeSetError(element){
                const currentsetError = element.parentElement.querySelectorAll(".pErrorText");
                for(let i = 0; i < currentsetError.length; i++){
                        currentsetError[i].remove();
                }
        }


});
