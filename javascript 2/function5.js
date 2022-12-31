//Write code to find the absolute difference of two numbers
//Sample Input-1 12,4
//Sample Output-1 8
//Sample Input-2 4,18
//Sample Output-2 14
//NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value 

function diff(a,b){
  return a-b;}
let x=diff(4,14);
function absdiff(a){
  if(a<0){return a*(-1);}
  else{return a;}
}
let z=absdiff(x);
console.log(z);
