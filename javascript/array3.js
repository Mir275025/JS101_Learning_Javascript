//Problem 3 : Given an array of numbers find the average of all the even numbers.
let array=[20,23,24,12];
let sum=0;
let count=0;
for(let i=0;i<array.length;i++){
  sum+=array[i];
  count++;
}
console.log(sum/count);