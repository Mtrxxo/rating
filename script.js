let firstView = document.querySelector(".container-one")
let secondView = document.querySelector(".container-two")
let submitButton = document.getElementById("submit-btn")
let numChange = document.querySelector(".num-change")
let myNumbers = document.querySelectorAll(".button")

firstView.style.display = "flex"
secondView.style.display = "none"

submitButton.addEventListener("click", handleView)

function handleView(){
    firstView.style.display = "none"
    secondView.style.display = "flex"
}

for (var i = 0; i < myNumbers.length; i++){
    myNumbers[i].addEventListener("click", function(e){
        numChange.innerHTML = e.target.innerHTML
    })
};