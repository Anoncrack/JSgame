const girl = document.getElementById("girl")
const heart = document.getElementById("heart")

document.addEventListener("keydown", function(event) {
    girlJump();
});

function girlJump () {
    girl.classList.add("girlJump")
}