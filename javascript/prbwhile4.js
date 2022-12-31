//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let count=0;
let sum=0;
let num=1;
while(num<=100){
  sum=sum+num;
  count++;
  num++;
}
console.log(sum/count);