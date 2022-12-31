//Problem 2: Use the above function to print the Primes from 2 to a given limit

function checkprime(num){
  let factor=0;
  for(let i=0;i<=num;i++){
    if(num%i==0){
      factor++;}}
    if(factor==2){
    return true}
    else{ return false}
  }
 for(let i=2;i<=50;i++){
   if(checkprime(i)){
     console.log(i,"is Prime");}
   
   
 }