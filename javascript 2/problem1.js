//Problem 1: Create a function to check if a number is Prime or Not
function checkprime(num){
  let factor=0;
  for(let i=0;i<=num;i++){
    if(num%i==0){
      factor++;}}
    if(factor==2){
    return "This is a Prime Number"}
    else{ return "This is not a Prime Number"}
  }
 
let num=2;
   

let ans=checkprime(num);
console.log(ans);