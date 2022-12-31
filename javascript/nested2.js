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