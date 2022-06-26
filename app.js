const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword")

Element.prototype.insertAfter = function (newEl) {
    this.parentNode.insertBefore(newEl, this.nextSibling);
}



const span = document.createElement("span");
span.style.fontSize = 'small';
span.style.color = 'red';
span.innerText = "* Passwords do not match!";
password.insertAfter(span);
password.style.borderColor = 'red';
confirmPassword.style.borderColor = 'red';


// password.style.borderColor = 'red';
// const span = document.createElement("span");
// span.style.fontSize = 'small';
// span.style.color = 'red';
// span.innerText = "* Passwords do not match!"
// password.insertAfter(span);



var check = function () {
    // console.log(document.body.contains(document.getElementById('span')));
    console.log(`BEFORE Password: ${password.value} and confirmPassword is: ${confirmPassword.value}`)
    if (password.value === confirmPassword.value && (password.value)) {
        console.log(`AFTER Password: ${password.value} and confirmPassword is: ${confirmPassword.value}`)

        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
        span.style.color = 'green';
        span.innerText = "Passwords Matched!";


    }
    else {

        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
        span.style.color = 'red';
        span.innerText = "* Passwords do not match!";

    }
}

