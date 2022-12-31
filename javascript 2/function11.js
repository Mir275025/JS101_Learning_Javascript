//Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

let arr=["A","B","C","D"];
function lastIn(arr,element){
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i]==element){return i}
    else
    {return -1}
  }
}console.log(lastIn("C"));