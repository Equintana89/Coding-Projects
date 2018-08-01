let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let length = document.getElementById('length');
let mess = document.getElementById('message');




inputEmail.addEventListener('input', function(event) {
	if(inputEmail.validity.typeMismatch) {
		inputEmail.setCustomValidity('I expect an email here!');
	} else {
		inputEmail.setCustomValidity('');
	}
});



//When the user starts to type something inside the password field
// password.onkeyup = function() {
// 	//validate lowercase letters
// 	let lowerCaseLetters = /[a-z]/g;
// 		if(password.value.match(lowerCaseLetters)) {
// 			letter.classList.remove('invalid');
// 			letter.classList.add('valid');
// 		} else {
// 			letter.classList.remove('valid');
// 			letter.classList.add('invalid')
// 		}
// };

// //validate capital letters
// let upperCaseLetters = /[A-Z]/g;
// 	if(password.value.match(upperCaseLetters)) {
// 		capital.classList.remove('invalid');
// 		capital.classList.add('valid');
// 	} else {
// 		capital.classList.remove('valid');
// 		capital.classList.add('invalid');
// 	}

// //validate numbers
// let numbers = /[0-9]/g;
// 	if(password.value.match(numbers)) {
// 		number.classList.remove('invalid');
// 		number.classList.add('valid');
// 	} else {
// 		number.classList.remove('valid');
// 		number.classList.add('invalid');
// 	}

// 	//validate length
// 	if(password.value.length >= 8) {
// 		length.classList.remove('invalid');
// 		length.classList.add('valid');
// 	} else {
// 		length.classList.remove('valid');
// 		length.classList.add('invalid');
// 	}


