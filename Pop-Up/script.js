// Variables
const modal = document.querySelector(".modal"),
      btn = document.querySelector(".btn"),
      close = document.querySelector(".close");

//Add Actions
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//Create Functionc Responsible for Action
//OPEN MODAL Function
function openModal(e){
    e.preventDefault();
    modal.style.display = "block";
};

//CLOSE MODAL Function
function closeModal(){
    modal.style.display = "none";
};