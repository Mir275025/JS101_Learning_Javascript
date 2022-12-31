let str="";
let obj={
  name:"",
  age:""};
let names=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ages=[32, 30, 26, 28, 44];
for(let i=0;i<ages.length;i++){
  obj.name=names[i];
  obj.age=ages[i];
  if(obj["age"]>30){
    str+=obj.name+" ";}
}console.log(str);
