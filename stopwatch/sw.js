// document.getElementsByClassName("blo")[0].innerHTML = "00";
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var st =0;
var cdn = 0;
document.getElementsByClassName("hrs")[0].innerHTML = "0"+a;
document.getElementsByClassName("mins")[0].innerHTML = "0"+b;
document.getElementsByClassName("secs")[0].innerHTML = "0"+c;
function timer(){
    c+=1;
    if(c==59){
        b+=1;
        c=0;
    }
    if(b==59){
        a+=1;
        b=0;
    }
    if(a<10){
    document.getElementsByClassName("hrs")[0].innerHTML = "0"+a;
    }
    else{
        document.getElementsByClassName("hrs")[0].innerHTML = a;
    }
    if(b<10){
        document.getElementsByClassName("mins")[0].innerHTML = "0"+b;
    }
    else{
        document.getElementsByClassName("mins")[0].innerHTML = b;
    }
    if(c<10){
        document.getElementsByClassName("secs")[0].innerHTML = "0"+c;
    }
    else{
        document.getElementsByClassName("secs")[0].innerHTML = c;
    }
    // document.getElementsByClassName("ms")[0].innerHTML = d;
    // c+=1;
}
var start = document.getElementsByClassName("start")[0];
// setInterval(timer,1000);
function Start(timer){
    if(st==0 & cdn == 0){
        k = setInterval(timer,1000);
        st = 1;
    }
    else {
        k = setInterval(count,1000);
        cdn = 0;
    }
}
var stop = document.getElementsByClassName("stop")[0];
function Stop(){
    if(st == 1 || cdn == 0){
        clearInterval(k);
        st=0;
    }
}
// var add = setInterval(timer,1000);
function Reset(){
    a=0;
    b=0;
    c=0;
    document.getElementsByClassName("hrs")[0].innerHTML = "0"+a;
    document.getElementsByClassName("mins")[0].innerHTML = "0"+b;
    document.getElementsByClassName("secs")[0].innerHTML = "0"+c;
    Stop();
}
function countdown(){
    if(st == 0 & cdn == 0){
        cdn = 1;
        d = window.prompt("Set Timer");
    }
    p = parseInt(d / 10);
    q = parseInt(d % 10);
    r = 0;
    if(p<10){
        document.getElementsByClassName("hrs")[0].innerHTML = "0"+p;
    }
    else{
        document.getElementsByClassName("hrs")[0].innerHTML = p;
    }
    if(q<10){
        document.getElementsByClassName("mins")[0].innerHTML = "0"+q;
        }
    else{
        document.getElementsByClassName("mins")[0].innerHTML = q;
    }
    if(r<10){
        document.getElementsByClassName("secs")[0].innerHTML = "0"+r;
        }
    else{
        document.getElementsByClassName("secs")[0].innerHTML = r;
    }  
}
function count(){
    if(r == 0 & q!=0){
        r = 59;
        q -= 1;
    }
    if(q == 0 & p != 0){
        q == 59;
        p -=1;
    }
    if(p == 0 & q == 0 & r == 0){
        clearInterval(k);
    }
    if(p<10){
        document.getElementsByClassName("hrs")[0].innerHTML = "0"+p;
    }
    else{
        document.getElementsByClassName("hrs")[0].innerHTML = p;
    }
    if(q<10){
        document.getElementsByClassName("mins")[0].innerHTML = "0"+q;
        }
    else{
        document.getElementsByClassName("mins")[0].innerHTML = q;
    }
    if(r<10){
        document.getElementsByClassName("secs")[0].innerHTML = "0"+r;
        }
    else{
        document.getElementsByClassName("secs")[0].innerHTML = r;
    }
    r -=1;
}