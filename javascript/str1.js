// Problem 1 : Given a string count the number of words in that string
let count=0;
let str="Hello How are you";
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count++;
  }
}console.log("Number of words are :",count+1);