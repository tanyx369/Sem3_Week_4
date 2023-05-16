let duration = 15

function head(){
    let head = document.getElementById("head")
    let indent = document.createElement("th")
    head.appendChild(indent)

    for(let i = 9 ; i <= 17; i ++){

        for(let x = 0 ; x < 60 ; x += duration){

            let time = document.createElement("th")
            if(x == 0){
                time.innerText = "" + i + ":" + "00"
            }
            else{
                time.innerText = "" + i + ":" + x
            }
         
            head.appendChild(time)
        }
        
    }
}

let days = ["Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function body(){
    let body = document.getElementById("body")

    for(let y = 0 ; y <7 ; y++ ){
        let row = document.createElement("tr")
        let day = document.createElement("td")
        day.innerText = days[y]
        day.style.fontWeight = "bold"
        day.style.backgroundColor = "lightblue"
        row.className = days[y]
        row.appendChild(day)
        body.appendChild(row)
    }
}


function bodyRow(){
  
   let dayRow = document.querySelectorAll("tr")
   // dayRow is a collection
    let index = 0
   dayRow.forEach((element)=>{

       for(let r = 0 ; r < 36; r ++ ){
            let tdata = document.createElement("td")
            //tdata.className = days[index]
            element.appendChild(tdata)
            
        }

        index ++
   })

 
}

function subject(){
    let monday = document.querySelectorAll("tr")
    monday.forEach((element)=>{
        //console.log(element.className)
        let children = element.querySelectorAll("td")
        switch(element.className){
            case "Monday":
                children[5].colSpan = "8"
                // DEMO
                //children[5].style.backgroundColor = "yellow"
                //let test = document.getElementById("greet")
                //children[5].appendChild(test)
                let math1 = document.getElementById("Maths1")
                children[5].style.backgroundColor = "crimson"
                children[5].appendChild(math1)

                children[10].colSpan = "8"
                let econs1 = document.getElementById("Econs1")
                children[10].style.backgroundColor = "lightgreen"
                children[10].appendChild(econs1)

                for(let i = 36; i >= 23 ; i-- ){
                element.removeChild(children[i])
                }
            break;
            case "Tuesday":

                children[9].colSpan = "8"
                let econs2 = document.getElementById("Econs2")
                children[9].style.backgroundColor = "lightgreen"
                children[9].appendChild(econs2)

                children[14].colSpan = "8"
                let coding = document.getElementById("Coding")
                children[14].style.backgroundColor = "orange"
                children[14].appendChild(coding)

                for(let i = 36; i >= 23 ; i-- ){
                    element.removeChild(children[i])
                }
            break;
            case "Wednesday":
                children[1].colSpan = "8"
                // let math2 = math1.cloneNode(true)
                let math2 = document.getElementById("Maths1").cloneNode(true)
                math2.id = "Maths2"
                children[1].style.backgroundColor = "crimson"
                children[1].appendChild(math2)

                children[2].colSpan = "8"
                let eng = document.getElementById("Eng")
                children[2].style.backgroundColor = "blueviolet"
                children[2].appendChild(eng)

                for(let i = 36; i >= 23 ; i-- ){
                    element.removeChild(children[i])
                }
            break;
            case "Thursday":
                children[1].colSpan = "8"
               // let coding2 = document.getElementById("Coding").cloneNode(true)
               let coding2 = document.createElement("div")
               coding2.innerHTML = document.getElementById("Coding").innerHTML
               coding2.id = "Coding2"
               coding2.querySelector("p4").innerHTML = "W1-CLab3"
               children[1].style.backgroundColor = "orange"
               children[1].appendChild(coding2)

                for(let i = 36; i >= 30 ; i-- ){
                    element.removeChild(children[i])
                }
        }
        
    })
}


/*
function body2(){
    let daysML = document.getElementById("days")

    for(let i = 0 ; i < 7 ; i++){
        let dayValue = document.createElement("tr")
        let day = document.createElement("td")
        day.innerText = days[i]
        dayValue.appendChild(day)
        daysML.appendChild(dayValue)
    }
}*/

/**
if(element.className == 'Monday'){
            //element.firstElementChild.colSpan = "3"
            let children = element.querySelectorAll("td")
            children[5].colSpan = "8"
            children[17].colSpan = "8"
            for(let i = 36; i >= 23 ; i-- ){
                element.removeChild(children[i])
            }
}
 */

head()
body()
//body2()
bodyRow()
subject()