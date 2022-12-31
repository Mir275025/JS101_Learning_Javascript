//Write a function isOdd which returns a boolean value based on the number is odd or not
//Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(num)
  {
    if(num%2==1)
    {return true;}
    else
    {return false;}
  }
for(let i=0;i<=200;i++)
{ if(isOdd(i)==true)
 {
    console.log(i);
  }
}
  