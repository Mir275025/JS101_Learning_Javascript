//Problem 5: Write a function to replace spaces in a given string with - .
function replaceSpace(str){
  str=str.replaceAll(" ","-");
  console.log(str);
}
let str="hello what are you doing";
replaceSpace(str);