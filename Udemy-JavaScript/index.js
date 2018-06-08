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
var john = {
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
