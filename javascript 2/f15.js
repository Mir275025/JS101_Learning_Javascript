//Write a custom function that has the same behavior of inbuilt Array Includes Function
function includeArr(pet){
  let f=0;
  for(let i=0;i<pets.length;i++){
    if(pet==pets[i]){
      f=1;
      break;
    }
  }
  if(f==1){
    return "true";
  }
  else{
    return "false";
  }
}
const pets=["cat","dog","bat"];
let str2=includeArr("bull");
console.log(str2);