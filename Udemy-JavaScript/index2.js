/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Hoisting
//If the function is called before or after it will still run ONLY in function declarations. This is hoisting.

//functions
/*calculateAge(1960);

function calculateAge(year) {
	console.log(2016 - year);
}





let retirement = function(year){
	console.log(65 - (2016 - year));
}

retirement(1992);


//Variables
console.log(age);
var age = 23;

function foo(){
	let age = 65;
	console.log(age);
}

foo();
console.log(age); */


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Scoping

/*let a = 'Hello!';
first();

function first(){
	let b = 'Hi!';
	second();

	function second(){
		let c = 'Hey!';
		console.log(a + b + c);
		third();
	}
}

function third(){
	let d = 'John';
	console.log(b);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*calculateAge(1985);

function calculateAge(year){
	console.log(2016 - year);
	console.log(this);
}*/

var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);
		console.log(2016 - this.yearOfBirth);

		/*function innerFunction(){
			console.log(this);
		}
		innerFunction();*/
	}
}

john.calculateAge(); 

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};


//Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();