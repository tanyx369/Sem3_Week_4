let input = document.querySelectorAll("input");
let reset = document.getElementById("reset");
let placeholder = []

let count = 0;
input.forEach(element =>{
    placeholder[count] = element.placeholder
    element.onclick = function(){
        element.placeholder = ""
    }

    count++
})

let x = 0
reset.onclick = function(){
    input.forEach(element =>{
        element.placeholder = placeholder[x]
        x++
        if(x == 3){
            x == 0
        }
    })
}

console.log(placeholder)