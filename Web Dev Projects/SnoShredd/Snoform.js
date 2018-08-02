let email = document.getElementById('inputEmail');

inputEmail.addEventListener('input', function(event) {
	if(inputEmail.validity.typeMismatch) {
		inputEmail.setCustomValidity('I expect an email here!');
	} else {
		inputEmail.setCustomValidity('');
	}
});






