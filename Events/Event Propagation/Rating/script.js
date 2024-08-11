let container = document.querySelector(".star-container");
let stars = document.querySelectorAll(".star")

let count = document.getElementById("count")

container.addEventListener("click", function(e){
    console.log(e.target.dataset.index)
    let review = Number(e.target.dataset.index)

    if (review) {
        for (let index = 0; index < stars.length; index++) {
            if (index<review) {
                stars[index].classList.add("star-filled")
            }else{
                stars[index].classList.remove("star-filled")
            }
        }
    }
    count.textContent = review;
})