var data = [
    {
        Name:'hema',
        Branch: "cse",
        College: "AEC"
    },
    {
        Name: "chotu",
        Branch: "Aiml",
        College: "acet"
    },
    {
        Name:'Maggie',
        Branch: "Ds",
        College: "pu"
    }
]
// console.log(data[1].name);

// var btn = document.getElementsByClassName("btn")[0];
var click=0;
function display(){
    var tab = document.getElementById("tab")[0];
    if(click==0){
        var tr1 = document.createElement("tr");
        var th = document.createElement("td");
        Object.entries(data[0]).map(ele =>{
            th.innerHTML = ele[0];
        })
        tr1.appendChild(th);
        tab.appendChild(tr1);
    }
}