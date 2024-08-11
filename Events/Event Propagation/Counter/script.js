let counterDisplay = document.getElementById("number");
let counterVal = document.getElementById("increment");

let incBtn = document.getElementById("add");
let decBtn = document.getElementById("subtract")

let reset = document.getElementById("reset")

let factor = 1;

counterVal.addEventListener("change", function(e){
    factor = parseInt(e.target.value);
    if (factor<1) {
        factor = 1        
    }
})

incBtn.addEventListener("click", function(){
    let text = counterDisplay.innerText;
    let total = parseInt(text) + factor;
    counterDisplay.innerText = total;
})


decBtn.addEventListener("click", function(){
    let text = counterDisplay.innerText;
    let total = parseInt(text) - factor;
    if (total<0) {
        total = 0;     
    }

})

reset.addEventListener("click", function(){
    counterDisplay.innerText = 0;
})