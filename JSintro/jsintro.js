// var a=parseInt(window.prompt("Enter First Value"));
// var b=parseInt(window.prompt("Enter Second Value"));
// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }
// var j=0;
// for(var i=2;i<a;i++){
//     if(a%i==0){
//         console.log("Not a Prime");
//         var j=1;
//         break;
//     }
// }
// if(j==0){
//     console.log("prime")
// }
// var x= new Date(2004-8-26);
// document.write(x)
// document.write(x.getDate()+"-"+(parseInt(x.getMonth())+1)+"-"+x.getFullYear());
// document.write(x.getFullYear());
// function Karna(a,b=0,c){
//     console.log(a+b)
// }
// Karna(2);3
function herons(a,b,c){
    let s=(a+b+c)/2;
    h=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    // herons=h**(1/2);
    console.log(h);
}
let a=parseInt(window.prompt("enter length of one side"));
let b=parseInt(window.prompt("enter length of another side"));
let c=parseInt(window.prompt("enter length of one side"));
herons(a,b,c);
function quadratic(p,q,r){
    let d=Math.sqrt(Math.abs((q**2)-(4*p*r)));
    console.log((-q+d)/(2*p));
    console.log((-q-d)/(2*p));
}
let p=parseInt(window.prompt());
let q=parseInt(window.prompt());
let r=parseInt(window.prompt());
quadratic(p,q,r);