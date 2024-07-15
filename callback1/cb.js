function fun(){
    var x = new Date();
    // console.log(x.getHours());
    // console.log(x.getMinutes());
    // console.log(x.getSeconds());
    var a = x.getHours();
    var b = x.getMinutes();
    var c = x.getSeconds();
    // var d = x.getMilliseconds();
    if(a<10){
    document.getElementsByClassName("hours")[0].innerHTML = "0"+a;
    }
    else{
    document.getElementsByClassName("hours")[0].innerHTML = x.getHours();

    }
    if(c<10){
        document.getElementsByClassName("secs")[0].innerHTML = "0"+c;
    }
    else{
        document.getElementsByClassName("secs")[0].innerHTML = x.getSeconds();
    }
    if(b<10){
        document.getElementsByClassName("mins")[0].innerHTML = "0"+b;
    }
    else{
        document.getElementsByClassName("mins")[0].innerHTML = x.getMinutes();
    }
    // document.getElementsByClassName("secs")[0].innerHTML = x.getSeconds()
    document.getElementsByClassName("ms")[0].innerHTML = x.getMilliseconds();

    // if(x.getSeconds()==0){
    //     clearInterval(address)
    // }
}

// var address = setInterval(fun,1000)
setInterval(fun,1)
// setTimeout(function(){console.log("hai")},2000);
// function print(result){
//     console.log(result);
// }
// function add(a,b,lol){
//     lol(a+b);
// }
// add(10,20,print);