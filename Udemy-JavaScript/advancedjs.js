// Function contructor

/*var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job; 
	
}

Person.prototype.calculatAge = function() {
		console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculatAge();
jane.calculatAge();
mark.calculatAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICE

//Create the object
/*var utahJazz = {
	coach: 'Quin Snyder',
	rookie: 'Donovan Mitchell',
	draftYear: 2017
};

// Create the function constructor
let Player = function(coach, rookie, draftYear) {
	this.coach = coach;
	this.rookie = rookie;
	this.draftYear = draftYear;

}

//Adding method to the constructor's prototype property
Player.prototype.yearsPlaying = function() {
		console.log(2045 - this.draftYear);
};

Player.prototype.league = "NBA";

var utahJazz = new Player('Quin Snyder', 'Donovan Mitchell', 2017);
let lakers = new Player('Luke Walton', 'Lonzo Ball', 2017);
let okc = new Player('Billy Donovan', 'Paul George', 2009);

utahJazz.yearsPlaying();
lakers.yearsPlaying();
okc.yearsPlaying();

console.log(utahJazz.league);
console.log(lakers.league);
console.log(okc.league);*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICE

/*var tesla = {
	model: 'Model S',
	price: 35000,
	taxDeduction: 7500
};

let Car = function(model, price, taxDeduction) {
	this.model = model;
	this.price = price;
	this.taxDeduction = taxDeduction;

}

Car.prototype.discount = function(){
	console.log(this.price - this.taxDeduction - 2500);
};

Car.prototype.carType = 'Coupe';

var tesla = new Car("Model S", 35000, 7500);
let ford = new Car('GT', 120000, 0);
let toyota = new Car('prius', 25000, 3500);

tesla.discount();
ford.discount();
toyota.discount();

console.log(tesla.carType);
console.log(ford.carType);
console.log(toyota.carType);*/




//Object.create

/*let personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
}

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = '1990';
john.job = 'teacher';

let jane = Object.create(personProto, {
	name: { value: 'Jane' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});*/
	



// Primitives vs objects

//Primitives
let a = 23;
let b = a;
a = 46; //Mutated/changed variable
console.log(a);
console.log(b);



//Objects
let obj1 = {
	name: 'John',
	age: 26
};

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
let age = 27;
let obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);






































