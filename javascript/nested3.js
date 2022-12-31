 for(let i=2;i<=10;i++){
  let count=0;
  for(let j=1;j<=i;j++){
    if(i%j==0){count++;}
  }
  if(count==2){console.log(i,": is Prime Number");}
  else{console.log(i,": is Not Prime Number");}
}