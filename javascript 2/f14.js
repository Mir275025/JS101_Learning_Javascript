//Write a custom function that has the same behavior of inbuilt String Substring Function
function subArr(j,k){
  let str="";
  for(let i=j;i<k;i++){
    str+=fruit[i];
  }
  return str;
}
const fruit="mango";
let str1=subArr(0,2);
console.log(str1);