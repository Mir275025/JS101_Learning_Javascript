//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join

let arr=[1,2,3,4,5,6];
function join(arr,sym){
  if(sym==undefined){
    let bag="";
    for(let i=0;i<arr.length;i++){
      if(i==arr.length-1){bag=bag+arr[i]}
      else{bag=bag+arr[i]+","}
      return bag;}
  }
}console.log(join(arr));