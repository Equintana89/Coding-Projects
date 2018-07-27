let email = document.querySelector('#inputEmail');
let password = document.querySelector('#inputPassword');

inputEmail.addEventListener('input', function(event) {
	if(inputEmail.validity.typeMismatch) {
		inputEmail.setCustomValidity('I expect an email here!');
	} else {
		inputEmail.setCustomValidity('');
	}
});

inputPassword.addEventListener('input', function(event) {
	if (inputPassword.validity.typeMismatch) {
		inputPassword.setCustomValidity('Password requirements are being used.');
	} else {
		inputPassword.setCustomValidity('');
	}
});