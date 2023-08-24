// Create variables
const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");

//Add action
add.addEventListener("click", () => {
    count.innerHTML++;
    setColor();
});
sub.addEventListener("click", () => {
    count.innerHTML--;
    setColor();
});
resetCount.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor();
});

//Create The Condition
function setColor() {
    if (count.innerHTML > 0){
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    } else {
        count.style.color = "white";
    }
}