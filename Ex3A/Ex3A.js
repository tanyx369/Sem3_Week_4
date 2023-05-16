let userName = document.getElementById("userName")

/*
userName.onmousedown = function(){
    userName.style.borderColor = "blue"
    userName.style.borderWidth = "5px"
    userName.style.borderRadius = "8px"
}

window.onmousedown = function(){
    userName.style.borderColor = "lightblue"
    userName.style.borderWidth = "5px"
    userName.style.borderRadius = "8px"
}
*/

let remember = document.getElementById("remembered")
remember.onclick = function(){
    if(remember.checked){
        document.getElementById("rem").style.color = "black"
    }
    else{
        document.getElementById("rem").style.color = "rgba(219, 217, 213, 0.356)"
    }
}


console.log("linked")