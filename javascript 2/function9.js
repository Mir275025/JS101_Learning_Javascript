//Given a string swap the case and print the output
//Sample Input - Test
//Sample Output - tEST
//NOTE: Use multiple functions to achieve the result, NOT one single code block


function Lowercase(a)
  {
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<lower.length;i++){
      if (a==upper[i]){
        return lower[i];}
    }}

    function uppercase(a)
  {
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let j=0;j<lower.length;j++){
      if (a==lower[j]){
        return upper[j];}}}
    let str="TeST";
    let bag=0;
    for(let k=0;k<str.length;k++){
      bag+=uppercase(str[k]);
      bag+=Lowercase(str[k])
    }console.log(bag);
      