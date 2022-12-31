//Nested
// for(let floor=1;floor<=4;floor++){
  
  
//   // console.log("floor",floor)
//   for(let room=1;room<=4;room++){
//     if(room==2){
//     continue;
//   }
//     console.log(floor+"-"+room);
// }}
//let a=null;
//special data type,only assigned by user.
//Object
// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki"
  
// };
// //If i want to print specific values in the object.
// console.log(details.age);//Dot Notation
// console.log(details["age"]);//Bracket Notation.

// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki"
  
// };
// details.gender="Male";//Dot Notation
// // console.log(details);
// details["Best_friend"]="Floki";//Bracket Notation
// console.log(details);

// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki"
  
// };
// details.age=25;//Dot Notation

// details["address"]="Ganderbal";//Bracket Notation
// console.log(details);

//If the key and value are present,I want to change it,,  We can update and add on the values.

// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki"
  
// };
// delete details["name"];//Bracket
// delete details.phone;//dot

// console.log(details);

// let me={
//   name:"Mir Suhaib",
//   age:27,
//   phone:12345,
//   location:"Kashmir",
//   Driving_License:true,
//   Lunch:false
// }
// // console.log(me);
// me.fathername="Mr Mir";
// me["Sister"]="xyz";
// // console.log(me);
// me.phone=123;
// me.age=21;
// me["Driving_License"]=false;
// me["Lunch"]=true;
// // console.log(me);
// delete me.Driving_License;
// delete me["Lunch"];
// console.log(me);


// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki",
//   hobbies: ["swimming","playstation","cricket"]
  
// };
// console.log(details.hobbies[2])

// let details={
//   name: "luffy",
//   age:22,
//   location: {
//     city:"sgr",
//     state:"J&K",
//     pin_code:193501 },
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki",
//   hobbies: ["swimming","playstation","cricket"]
  
// };
// console.log(details.location.pin_code);
// console.log(details.hobbies[0]);
// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki"
  
// };
// for(let i in details){
//   console.log(i,"=",details[i]);
// }
// let details={
//   name: "luffy",
//   age:22,
//   address:"sgr",
//   phone:34567,
//   father_name:"goku",
//   mother_name:"loki"
  
// };
// for(let key in details){
//   console.log(key+"="+details[key]);
// }
// let arr=["luffy","gohan","vegita","zoro","nami","sanji",
// "luffy","gohan","vegita","zoro","nami","Suhaib","sona"];
// let object={};
// for(let i=0;i<arr.length;i++){
  
// }
let object={};
let str="suhaiba";
for(let i=0;i<str.length;i++){
  if(object[str[i]]==undefined){
    object[str[i]]=1;}
  else{
    object[str[i]]++
  }
  }console.log(object);
