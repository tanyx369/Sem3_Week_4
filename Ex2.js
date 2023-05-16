const months = ["January", "February" , "March", "April", "May", "June"]

function head(){
    let heading = document.getElementById("head")
    let indent = document.createElement("th")
    indent.innerText = "Months in 2022 "
    indent.style.width = "300px"
    heading.appendChild(indent)
    for(let i = 0 ; i < 6; i++){
        let value = months[i]
        let month = document.createElement("th")
        month.innerText = value
        heading.appendChild(month)
    }
}




head()