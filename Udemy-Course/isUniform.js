function isUniform(arr){
var firstValue = arr[0];
for(var i = 1; i < arr.length; i++){
if(arr[i] !== firstValue){
return false;
}
} 
return true;
}