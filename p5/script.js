let form = document.querySelector("form")
let email = document.querySelector("#email")
let pass = document.querySelector("#password")

form.addEventListener("submit", function(detl){
    detl.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    emailcheck = emailRegex.test(email.value)
    passcheeck = passwordRegex.test(pass.value)

    isValid = true;
    
    if (!emailcheck){
        document.querySelector("#email-error").textContent = "Email is not valid"
        isValid = false;
        document.querySelector("#email-error").style.display = "block"
    }

    if (!passcheeck){
        document.querySelector("#password-error").textContent = "Password is not valid"
        isValid = false;
        document.querySelector("#password-error").style.display = "block"
    }

    if (isValid){
        document.querySelector("#final-output").textContent = "Everything is Fine..."
    }
})
