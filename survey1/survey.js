var data={
    name:'',
    age:0,
    // gender:'',
    ebn:0,
    mbn:0,
}

function fun(event){
    if(event.target.name == "peru"){
        data["name"]=event.target.value;        
    }
    else if(event.target.name=="age"){
        data.age=event.target.value;
    }
    // else if(event.target.name=="gender"){
    //     data.gender=data.target.value;
    // }
    else if(event.target.name=="ebn"){
        data.ebn=event.target.value;
    }
    else if(event.target.name=="mbn"){
        data.mbn=event.target.value;
    }
}
    
const subb = (event) => {
    event.preventDefault();
    console.log(data)
}