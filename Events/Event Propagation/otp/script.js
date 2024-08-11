// var elts = document.getElementsByClassName('input')

// Array.from(elts).forEach(function(elt){
//   elt.addEventListener("keyup", function(event) {
//     console.log("event.keyCode", event.keyCode)
//     // Number 13 is the "Enter" key on the keyboard
//     if(event.keyCode === 46){
//         if (event.target.value) {
//                 event.target.value =""       
//         }
        
//         // elt.previousElementSibling.value=""
//       elt.previousElementSibling.focus();
//     } 
//     for (let index = 0; index < elts.length; index++) {
        
//             if (elt.value.length == 1) {
//                 // Focus on the next sibling
//                 elt.nextElementSibling.focus();
//               }else if(event.keyCode === 8){
//                 elt.previousElementSibling.focus();
//               }else if(event.keyCode === 46){
//                   elt.previousElementSibling.value=""
//                 elt.previousElementSibling.focus();
//               }  
        
//     }
//   });
// })

const inputs = document.getElementById("inputs");

inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
        target.value = "";
        return;
    }

    if (val != "") {
        const next = target.nextElementSibling;
        console.log(next)
        if (next) {
            next.focus();
        }
    }
});

inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});