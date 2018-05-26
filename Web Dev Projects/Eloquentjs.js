//LOOPING A TRIANGLE

/*let x="#";
  while(x<="#######"){
    console.log(x);
    x = x + "#";
}*/



//FIZZBUZZ

/*for(let x=0; x<=100; x++){
	if(x % 3){
	console.log("Fizz");
	}else{
		if(x % 5){
			console.log("Buzz");
		}else{
			console.log("FizzBuzz");
		}
	}

}*/




//CHESS BOARD



/*let x="";
let size=8;

for(counter1 = 0; counter1 < size; counter1++){
	for(counter2 = 0; counter2 < size; counter2++){
		if((counter1 + counter2) % 2 == 0) {
			x += "#";
		}else{
			x += " ";
		}
	}
	x += "\n";
}
console.log(x);*/



//for practicing functions by modifying previous practice problems
/*function chess() {
	let i = "";
	let size = 8;
for(counter1 = 0; counter1 < size; counter1++){
	for(counter2 = 0; counter2 < size; counter2++){
		if((counter1 + counter2) % 2 !== 0) {
			i += "#";
		}else{
			i += " ";
		}
		i += "\n";
	}
	return i;
}
}
console.log(chess());*/


//MINIMUM
 
/*function max(a, b){
  if(a < b) return b;
  else return a;
}*/

/*function min(a, b){
  if(a < b){
  	return a;
  } else return b;
 }*/



//RECURSION

/*function isEven(n){
	if(n % 2 === 0) {
		return true;
	} else return false;
 	  
 	 if(n === 0){
 	 	return true;
 	 } 
	else if(n < 0) return isEven(-n);
} */	


//BEAN COUNTING


/*function countBs(myString) {
	let counter1 = 0;	
	for(i = 0; i < myString.length; i++){
		if (myString [i] === "B") {
			counter1 = counter1 + 1;
		}
	}
	return counter1;

  }*/

 function countChar(string, letter){
 	let counter = 0;
  	for(var i = 0; i < string.length; i++){
  		if(string[i] === letter){
  			counter += 1;
  		}
  	}
  	return counter;
  }
 
 function countBs(string){
 	return countChar(string, "B");
 } 











