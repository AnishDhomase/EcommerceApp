
// HAM POPUP

const container = document.querySelector("#container");
const hamBurgerIcon = document.querySelector(".navHamburger");
const hamPopup= document.querySelector(".Ham-popup");
const hamCloseIcon= document.querySelector("#Ham-close");

hamBurgerIcon.addEventListener("click", function(ev){
    ev.preventDefault();
    container.classList.add("hideContainer");
    hamPopup.classList.add("Hamactive");
});
hamCloseIcon.addEventListener("click", function(ev){
    ev.preventDefault();
    container.classList.remove("hideContainer");
    hamPopup.classList.remove("Hamactive");

});
// 
