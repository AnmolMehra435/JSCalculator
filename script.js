const span = document.querySelector("span");
const buttons = document.querySelectorAll(".button")
const clearBtn = document.querySelector(".clear");
const solution = document.querySelector(".solution");
const h2 = document.querySelector("h2");
const container = document.querySelector(".container");
const operator = document.querySelectorAll(".operator")
let number = "";
numb();

function numb(){
buttons.forEach((button)=>{
     button.onclick = () =>{
        number += button.innerText;
        if(number.length <= 12){
           span.innerText = number; 
        }      
        else{
            alert("Can only do calculations upto 12 digits.");
        }
      }
})
}
 

function sol(){ 
    clearBtn.onclick = () =>{
        span.innerText = "";
        val = "";
    } 
    let val = "";
    try{
    val = eval(span.innerText);
    }catch(err){
       alert("Please enter valid operation");
       span.innerText = "";
       val = "";
    }
    console.log(val);
    span.innerText = val;
    buttons.forEach((button) =>{
        button.onclick = () =>{
          val += button.innerText;
          if(val.length<=12){
            span.innerText = val;
          }else{
            alert("Can only do calculations upto 12 digits.")
          }
        }
         })
}


solution.onclick = () =>{
    if(span.innerText !== ""){
        sol();
    }else{
        alert("Please enter some value.")
    }

}

function clr(){
    span.innerText = "";
    number = "";
}

clearBtn.onclick = clr;


