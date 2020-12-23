const buttonClick = document.getElementById('button')
const inputs = document.querySelectorAll('input')
const form = document.getElementById('form')
const password = document.getElementById('password')
const email = document.getElementById('email')
const first = document.getElementById('first')
const lname = document.getElementById('lname')


function showError() {
    event.preventDefault()
    console.log(inputs)
    inputs.forEach(input => {
        if (input.validity.valueMissing || input.validity.typeMismatch) {      
            input.classList.add('error-input');
            let errorIcon = input.nextElementSibling;
            errorIcon.classList.remove('hide');
            let errorMsg = errorIcon.nextElementSibling;
            errorMsg.classList.remove('hide');
			errorMsg.textContent = input.validity.valueMissing ? `${input.placeholder} cannot be empty.` : `Looks like this is not an ${input.placeholder}`;
            console.log(input.validity)
        } else {
            input.classList.remove('error-input');
			if (input.nextElementSibling.classList.contains('error-icon')) {
                let errorIcon = input.nextElementSibling;
				errorIcon.classList.add('hide');
				let errorMsg = errorIcon.nextElementSibling;
                errorMsg.classList.add('hide');
			}
        }
    })
}

function Key(event) {
    if (event.keyCode === 13) {
        showError()
    }
}

buttonClick.addEventListener('click', showError);
password.addEventListener('keyup', Key)
first.addEventListener('keyup', Key)
lname.addEventListener('keyup', Key)
email.addEventListener('keyup', Key)
