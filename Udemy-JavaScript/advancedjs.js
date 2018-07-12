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
/*let a = 23;
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
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Passing functions as argumetns

/*let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let arrRes = [];

	for(let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}

	return arrRes;
}

function calculatAge(el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if(el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
	
}

let ages = arrayCalc(years, calculatAge);

let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Lecture: Functions returning functions

/*function interviewQuestion(job) {
	if(job === 'designer') {
		return function(name) {
			console.log(name + ',' + ' can you please explain what ux design is?')
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + '!' + ' What do you do?');
		}
	}
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');
let defaultQuestion = interviewQuestion();

teacherQuestion('John');
designerQuestion('Eddie');
defaultQuestion('Mike'); 

interviewQuestion('teacher')('Mark');*/ // Another way of calling the functions


//Practice
/*function enforceRule(gym) {
	if(gym === 'swimmers') {
		return function(title) {
			console.log(title + ',' + ' Please do not run!');
		}
	} else if (gym === 'body builders') {
		return function(title) {
			console.log('Hey ' + title + ' please do not overload the bar!')
		}
	} else {
		return function(title) {
			console.log('Attention! We will be closing in 10 minutes. Please begin to put away all of the weights.')
		}
	}
}

let swimmersEnforce = enforceRule('swimmers');
let liftersEnforce = enforceRule('body builders');
let defaultEnforce = enforceRule();

swimmersEnforce('Swimmers');
liftersEnforce('body builders');
defaultEnforce();*/

//Practice
/*function sportQuestion(sport) {
	if(sport === 'basketball') {
		return function(name) {
			console.log('Do you beleive the ' + name + ' will make out of the western conference?');
		}
	} else if (sport === 'football') {
		return function(name) {
			console.log('How good will the ' + name + ' be this year?');
		}
	} else {
		return function(name) {
			console.log('What two teams in your opinion will make it to the world cup final?');
		}
	}
}

let bball = sportQuestion('basketball');
let fball = sportQuestion('football');
let defaultSport = sportQuestion();

bball('Lakers');
fball('Eagles');
defaultSport();*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Immediately invoked function expressions (IIFE)

/*function game() {
	let score = Math.random() * 10;
	console.log(score >= 5);
}
 game();*/

//IIFE
 /*(function () {
 	let score = Math.random() * 10;
	console.log(score >= 5);
})();
*/
//console.log(score);

/*
(function (goodluck) {
 	let score = Math.random() * 10;
	console.log(score >= 5 - goodluck);
})(5);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Closures

/*function retirement(retirementAge) {
	let a = ' years until retirement.';
	return function(yearOfBirth) {
		let age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

let retirementUS = retirement(66);
let retireGermany = retirement(65);
let retirementIceland = retirement(67);

retirementUS(1990);
//retirement(66)(1990);
retirementIceland(1990)
retireGermany(1990);
*/


/*function interviewQuestion(job) {
	if(job === 'designer') {
		return function(name) {
			console.log(name + ',' + ' can you please explain what ux design is?')
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + '!' + ' What do you do?');
		}
	}
}*/




/*Since we created an inner function and passed name through it, our variables inside our if statement which are inside
the name function and within our interviewQuestions function had access to eachother. Instead of having to return the name
function for each else if statement, we only needed one name function returned at the top, and could access that through all
of our else if statements. Even after the function had already been returned.*/

/*function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ',' + ' can you please explain what ux design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + '!' + ' What do you do?');
		}
	}
}

interviewQuestion('teacher')('John');
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Bind, call and apply

/*let john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log("Good " + timeOfDay + " ladies and gentlemen! I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old.");
		} else if (style === 'friendly') {
			console.log("Hey! what's up? I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old. Have a nice " + timeOfDay + ".");
		}
	}
};

let emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');





let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let arrRes = [];

	for(let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}

	return arrRes;
}

function calculatAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

let ages = arrayCalc(years, calculatAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding challenge

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

 

/*(function() {

	function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;	
}

Question.prototype.displayQuestion = function() {
	console.log(this.question)

	for(let i = 0; i < this.answers.length; i++){
		console.log(i + ': ' + this.answers[i]);
	}
}

Question.prototype.checkAnswer = function (ans) {
	if(ans === this.correct){
		console.log('Correct!');
	

} else {
	console.log('Wrong answer! Try again');
  }
}

let q1 = new Question('Who won the 1997 NBA finals?', ['Chicago Bulls', 'Cleveland Caveliers', 'Utah Jazz'], 0);

let q2 = new Question('Who won the 2018 NBA finals?', ['Cleveland  Caveliers', 'Houston Rockets', 'Golden State Warriors'], 2);

let q3 = new Question('Who won the 2016 NBA finals MVP?', ['Lebron James', 'Kyrie Irving', 'Kevin Love'], 0);

let question = [q1, q2, q3];

let n = Math.floor(Math.random() * question.length);

question[n].displayQuestion();

var answers = parseInt(prompt('Please select the correct answer.'));

question[n].checkAnswer(answers);

})();*/


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// Practice
/*function Question(question, answer, correct){
	this.question = question;
	this.answer = answer;
	this.correct = correct;
}

Question.prototype.displayQuest = function() {
	console.log(this.question);

	for(let i = 0; i < this.answer.length; i++) {
		console.log(i + ': ' + this.answer[i]);
	}

}

Question.prototype.checkAnswer = function(ans) {
	if(ans === this.correct){
		console.log("You have guessed it right!!")
	} else {
		console.log('You have guessed incorrectly. Please try again!');
	}
}

let quest1 = new Question('When was the internet invented?', ['1950', '1976', '1983'], 2);
let quest2 = new Question('When was the first computer built?', ['between 1936 and 1938', '02/01/1954', '01/03/1965'], 0);
let quest3 = new Question('Who was the creator of the first Apple training manual?', ['Paul Allen', 'Bill Gates', 'Steve Balmer'], 0);

let question = [quest1, quest2, quest3];

let num = Math.floor(Math.random() * question.length);

question[num].displayQuest();

let answer = parseInt(prompt("Please enter the corret answer."));

question[num].checkAnswer(answer);*/


(function() {
  function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;	
}

Question.prototype.displayQuestion = function() {
	console.log(this.question);

	for(var i = 0; i < this.answers.length; i++){
		console.log(i + ': ' + this.answers[i]);
	}
}

Question.prototype.checkAnswer = function (ans, callback) {
	var sc;

	if(ans === this.correct){
		console.log('Correct!');
		sc = callback(true);
	} else {
	console.log('Wrong answer! Try again');

	sc = callback(false);
  }
  this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
	console.log('Your current score is: ' + score);
	console.log('-----------------------------------');
}

var q1 = new Question('Who won the 1997 NBA finals?', ['Chicago Bulls', 'Cleveland Caveliers', 'Utah Jazz'], 0);

var q2 = new Question('Who won the 2018 NBA finals?', ['Cleveland  Caveliers', 'Houston Rockets', 'Golden State Warriors'], 2);

var q3 = new Question('Who won the 2016 NBA finals MVP?', ['Lebron James', 'Kyrie Irving', 'Kevin Love'], 0);

var questions = [q1, q2, q3];

function score() {
	var sc = 0;
	return function(correct) {
		if (correct) {
			sc++;
		}
		return sc;
	}
}

var keepScore = score();


function nextQuestion() {

	var n = Math.floor(Math.random() * questions.length);
	questions[n].displayQuestion();
	var answer = prompt('Please select the correct answer.');
	if(answer !== 'exit') {
		questions[n].checkAnswer(parseInt(answer), keepScore);

		nextQuestion();
	 }

  }

	nextQuestion();

})();
	

