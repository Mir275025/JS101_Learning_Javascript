//Problem 4: Write a function to check if the char is a small case or not.
function Lower(char)
  {
    let lower="abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<lower.length;i++){
      if (char==lower[i])
      {return "small case";}
      
    }
  }
let ans=Lower("q");
console.log(ans);