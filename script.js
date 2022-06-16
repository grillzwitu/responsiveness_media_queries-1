let form = document.getElementsByTagName('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let first_name_label = document.getElementById('first_name_label');
let last_name_label = document.getElementById('last_name_label');
let email_label = document.getElementById('email_label');
let password_label = document.getElementById('password_label');
let btn = document.querySelector('.submit-btn')
let first_name_warning = document.getElementById('first_name_warning');
let last_name_warning = document.getElementById('last_name_warning');
let email_warning = document.getElementById('email_warning');
let password_warning = document.getElementById('password_warning');

let inputFields = [firstname, lastname, email, password];

const checkvalidity = () => {
    inputFields.forEach(ele => {
        if (ele.value === '') {
            ele.nextElementSibling.style.visibility = 'visible';
            ele.nextElementSibling.nextElementSibling.style.visibility = 'visible';
            ele.style.borderColor = "hsl(0, 100%, 74%)"

            if (ele === email) {
                email.setAttribute("placeholder", "email@example/com");
                email.classList.add('red_placeholder');
            }
        } else {
            ele.nextElementSibling.style.visibility = 'hidden';
            ele.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
            ele.style.borderColor = null

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                return true;
            }
            else {
                email.setAttribute("placeholder", "email@example/com");
                email.classList.add('red_placeholder');
                email.style.borderColor = "hsl(0, 100%, 74%)"
                email.nextElementSibling.style.visibility = 'visible';
                email.nextElementSibling.nextElementSibling.style.visibility = 'visible';
            }
        }
    });

}

btn.onclick = checkvalidity;
