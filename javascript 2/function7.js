//Write code to calculate the average of an array
//If there are no items in the array it should return 0
//NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
function average(a,b) {
let sum=0;
let count=0;
for (let i=a;i<=b;i++){
  sum+=i;
  count++}
  return sum/count;}
let avg=average(1,2);
 console.log(avg);
