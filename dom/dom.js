function change(){
var x = document.getElementsByClassName("me")[0];
x.setAttribute("src","../67354.jpg");
// x.style.height=""
}

const styles={
    height:"500px",
    width:"500px",
    backgroundColor:"black"
}
function chan(event){
    Object.assign(event.style,styles);
}