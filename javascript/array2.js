//Problem 2 : Given a character in lower case print the upper case character

let lower=["a","b","c","d"];
let upper=["A","B","C","D"];
let char="c";
for(let i=0;i<lower.length;i++){
  if(char==lower[i]){
    char=upper[i];}}
  console.log(char);
