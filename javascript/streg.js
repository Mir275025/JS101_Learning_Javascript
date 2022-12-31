let str="google";
//oogelg
//divide the given string into 2 halves.
//a. goo
//b. gle
let str1="";
for(let i=(str.length/2)-1;i>=0;i--)
  {str1=str1+str[i];}
// console.log(str1);
for(let j=str.length-1;j>=str.length/2;j--){
  str1=str1+str[j];}
console.log(str1);