//Create Variables
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

//Create Functions
const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
};

//Add Event Listener
btn.addEventListener("click", generateColor);



