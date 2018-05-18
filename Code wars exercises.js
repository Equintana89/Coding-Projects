var num = Math.sqrt(0);

function isSquare(num){
  for(i = 0; i < 200 ; i++){
  if(num % Math.sqrt(num) <= 0){
  return true;
    }
  } 
  return false;
 
}