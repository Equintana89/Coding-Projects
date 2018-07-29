let email = document.querySelector('#inputEmail');
let password = document.querySelector('#inputPassword');
let letter = document.querySelector('#letter');
let capital = document.querySelector('#capital');
let number = document.querySelector('#number');
let length = document.querySelector('#length');


inputEmail.addEventListener('input', function(event) {
	if(inputEmail.validity.typeMismatch) {
		inputEmail.setCustomValidity('I expect an email here!');
	} else {
		inputEmail.setCustomValidity('');
	}
});


password.onFocus = function() {
	document.querySelector('#message').style.display = 'block';
}

password.onBlur = function() {
	document.querySelector('#message').style.display = 'none';
}

password.onKeyup = function() {
	let lowerCaseLetters = /[a-z]/g;
		if(password.value.match(lowerCaseLetters)) {
			letter.classList.remove('invalid');
			letter.classList.add('valid');
		} else {
			letter.classList.remove('valid');
			letter.classList.add('invalid')
		}
}

let upperCaseLetters = /[A-Z]/g;
	if(password.value.match(upperCaseLetters)) {
		capital.classList.remove('invalid');
		capital.classList.add('valid');
	} else {
		capital.classList.remove('valid');
		capital.classList.add('invalid');
	}

let numbers = /[0-9]/g;
	if(password.value.match(numbers)) {
		number.classList.remove('invalid');
		number.classList.add('valid');
	} else {
		number.classList.remove('valid');
		number.classList.add('invalid');
	}

	if(password.value.length >=8) {
		length.classList.remove('invalid');
		length.classList.add('valid');
	} else {
		length.classList.remove('valid');
		length.classList.add('invalid');
	}


