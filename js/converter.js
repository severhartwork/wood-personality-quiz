
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let height = document.getElementById("height").value;
    let waist = document.getElementById("waist").value;
    let boardFeet = document.getElementById("boardFeet"); 
    boardFeet.value = (height/12) * (waist/2) * 18 / 12;
});