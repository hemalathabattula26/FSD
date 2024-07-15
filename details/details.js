var psw="";
function vali(event){
    psw=event.target.value;
    let c=0;
    var upc=/[A-Z]/g
    if(psw.match(upc)){
        c+=1;
    }
    else{
        console.log("Uppercase letters are missing");
    }
    let lc=/[a-z]/g;
    if(psw.match(lc)){
        c+=1;
    }
    else{
        console.log("Lowercase Letters are missing");
    }
    let num=/[0-9]/g;
    if(psw.match(num)){
        c+=1;
    }
    else{
        console.log("Numbers are missing");
    }
    let char=["@","#","$","%","^","&","*"];
    // if(psw.match(char)){
    //     c+=1;
    // }
    for(let i=0;i<char.length;i++){
        if(psw.includes(char[i])){
            c+=1;
            break;
        }
    }
    if(psw.length>=8){
        c+=1;
    }
    else{
        console.log("Length is small");
    }
    if(c==5){
        alert("Strong Password");
    }
    else{
        alert("Weak Password");
    }
}