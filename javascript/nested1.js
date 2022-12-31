
// for(let i=1;i<=10;i++)
// {
//   let a="";
//   for(let j=1;j<=10;j++){
//     if(i==1 || i==10){
//     a+="*";
//   }else if(j==1 || j==10){
//       a+="*";
//   }
//     else{a+=" "}
// }console.log(a);}

// for(let i=2;i<=10;i++){
//   let count=0;
//   for(let j=1;j<=i;j++){
//     if(i%j==0){count++;}
//   }
//   if(count==2){console.log(i,": is Prime Number");}
//   else{console.log(i,": is Not Prime Number");}
// }
let d=0;
for(let month=1;month<=12;month++){
  if(month==2){
    d=28;
  }
  else if(month==4 || month==6 || month==8 || month==10 || month==12){
    d=30;
  }
  else{d=31;}
  for(let day=1;day<=d;day++){
    console.log(day+"-"+month);
  }
}