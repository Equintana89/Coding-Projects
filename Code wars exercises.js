/*var num = Math.sqrt(0);

function isSquare(num){
  for(i = 0; i < 200 ; i++){
  if(num % Math.sqrt(num) <= 0){
  return true;
    }
  } 
  return false;
 
}*/


///////////////////////////////Function 3 - mulitplying two numbers//////////////////////////////////////
// Regular syntax
/*function multiply(a, b){
let num = a * b;
   if(num){
      return num;
    }
   multiply();
  
}

//Arrow function
let multiply = (a, b) => a * b;*/



//////////////////////////////////Find the smallest integer in the array/////////////////////////////////////
 class SmallestIntegerFinder {
  findSmallestInt(args) {
    let temp;
    
    for (let i = 0; i <= args[0]; i++){
      if(args[i] <= args[0]) {
        args[0] = args[i];
        temp = args[i];
      }
    }
    return temp;
  }
}

// Simplified syntax using Math.min
class SmallestIntegerFinder {
  findSmallestInt(args) {
  	return Math.min(...args);
  }
}