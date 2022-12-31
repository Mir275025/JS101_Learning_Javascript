//Write a function to convert a character to lower case
//Use this function to convert a given word to lower case
//Use that function to convert an array of strings to array of lower case strings
//Sample Input ["MA", "SA", "I", "SCH", "OOL"]
//Sample Output ["ma", "sa", "i", "sch", "ool"]

function lowercase(char) {

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0;i<lower.length;i++){
  if(char==lower[i]){
    return char;}
  else if(char==upper[i]){
    return lower[i];}
  }
  
  }
let arr=["MA","SA","I","SCH","OOL"];
let arr1=[];
for(let i=0;i<arr.length;i++){
  let bag="";
  for(let j=0;j<arr[i].length;j++){
    bag+=lowercase(arr[i][j]);}
  arr1.push(bag);}
console.log(arr1);
  
