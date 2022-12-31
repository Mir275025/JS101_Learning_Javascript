// let x=4;
// x=x+4;
// console.log(x);
// x=x+13;
// console.log(x);
// x+=19;
// console.log(x);
// x=x-4;
// console.log(x);
// x=x-13;
// console.log(x);
// x-=19;
// console.log(x);
//x++(post increment)//value assigned n then incre
// let a=5;
// let b=a++;
// console.log(b);
// console.log(a);
//++x(pre increment)//first incre n than assigned value.
// let c=12;
// let d=++c;
// console.log(d);
// console.log(c);
//x--(post decrement)//similar as line 14
//--x(pre Decrement)//similar as line 19
//While loop syntax 
// starting point
//condition
//output
//inr/decre
// let x=1;
// while(x<=15){
//   console.log("Messi");
//   x++;
// }
// let num=1;
// while(num<=20){
//   console.log(num);
//   num++;
// }
// let mul=1;
// for(let i=1;i<=5;i++){
//   mul=mul*i;
// }console.log(mul);
let sum=0;
for(let i=1;i<=20;i++){
  if(i%2==0 && i%5==0){
    sum=sum+i;
  }
}console.log(sum);
