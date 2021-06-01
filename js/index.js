


function main(a){
    document.getElementById("screen").value += a;
}
function fnc(b){
    document.getElementById("screen").value += b;
}


function result(){
    let x = document.getElementById("screen").value ;
    let y = eval(x);
    document.getElementById("screen").value = y;  
}

function clr(){
    document.getElementById("screen").value =""
}