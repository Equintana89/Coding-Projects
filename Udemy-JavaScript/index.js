//CODING CHALLENGE 1
/*var johnAge = 15;
var frienAge = 28;
var johnHeight = 135
var friendHeight = 130
var joeAge = 19;
var joeHeight = 160;

var johnScore = johnHeight + 5 * johnAge;
var friendScore = friendHeight + 5 * frienAge;
var joeScore = joeHeight + 5 * joeAge;


//Two players
if(johnScore < friendScore){
	console.log("John's friend is the winner with " + johnScore + " points!");
	
 } else if (johnScore > friendScore) {
	console.log("John is the winner with " + johnScore + " points!");
} else {
	console.log("There is a draw!");
} 


//Adding a third player
if(johnScore > friendScore && johnScore > joeScore) {
	console.log("John is the winner with " + johnScore + " points!");
} else if(friendScore > johnScore && friendScore > joeScore) {
	console.log("John's friend is the winner with " + johnScore + " points!");
} else if(joeScore > johnScore && joeScore > friendScore){
	console.log("Joe is the winner with " + joeScore + " points!");
} else {
	console.log("We have a draw!")
}*/
	

////////////////////////////////////////////////////////////////////////////////////////////////////////
// LECTURE: FUNCTIONS


//Calculating years to retirement
/*function calculateAge(yearOfBirth)	{
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1930);



function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if(retirement >= 0 ){
		console.log(name + " retires in " + retirement + " years");
	} else {
		console.log(name + " has retired.");
	}
  }	


yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mary", 1930);
yearsUntilRetirement("Mike", 1969);

//Switch Statement - replaces if else statements

var job = "cop";

job = prompt("What does John do?")

switch (job){
	case "teacher":
		console.log("John teaches kids");
		break;
	case "driver":
		console.log("John drives a cab.")
		break;
	case "cop":
		console.log("John helps fight crime.")
		break;
	default:
		console.log("John does something else.");
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Statements and Expressions

//function statement
/*function someFun(par){
	//code
}

//function expression
var someFun = Function(par) {
	//code
}

//Expressions
3 + 4;
var x = 3;

//statements
if(x === 5){
	//do something
}*/


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrays

/*var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[2] = "Ben";
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop('blue');
john.shift('Mr.');
console.log(john);

if (john.indexOf('teacher') === -1){
	console.log("John is NOT a teacher");
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Objects

//version 1
/*var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
//These brackets read the data in the object.
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
//These brackets mutate the data in the object.
john['job'] = 'Programmer';
console.log(john);

//Version 2
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/




//////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Objects and Methods
 //v1.0
/* var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		return 2016 - this.yearOfBirth;
	}
};


//console.log(john.calculateAge(1990));

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);*/

//v2.0

/*var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		this.age = 2018 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);


var mike = {
	yearOfBirth: 1950,
	calculateAge: function(){
		this.age = 2018 - this.yearOfBirth;
	}
};

mike.calculateAge();
console.log(mike);*/




/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Loops

/*for(var i = 0; i < 10; i++){
	console.log(i);
}*/

/*
0, true, print 0, update i to 0
1, true, print 1, update i to 1
.
.
.
.
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/



//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//For loops

/*for(var i = 0; i < names.length; i++){
	console.log(names[i]);
}


for(var i = names.length - 1; i >= 0; i--){
	console.log(names[i]);
}*/



//While loops

/*var i = 0;
while(i < names.length){
	console.log(names[i]);
	i++;
}*/


// break
/*for(var i = 1; i <= 5; i++){
	console.log(i);

	if(i === 3) {
		break;
	}
}

//continue
for(var i = 1; i <= 5; i++){
	if(i === 3) {
		continue;
	}

	console.log(i);
}*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 2

function printFullAge(birthYear){
	var ages = [];
	var fullAges = [];

	for(var i = 0; i < birthYear.length; i++){
	ages[i] = 2016 - birthYear[i];
}

for(i = 0; i < ages.length; i++){
	if(ages[i] >= 18){
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and of full age.')
		fullAges.push(true);
	} else {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is not of full age.');
		fullAges.push(false);
	}
}

return fullAges;

}


var birthYear = [1989, 1992, 2011, 1998];
var full_1 = printFullAge(birthYear);
var full_2 = printFullAge([2012, 1915, 1999]);

