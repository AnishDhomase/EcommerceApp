
// HAM POPUP
const hamBurgerIcon = document.querySelector(".navHamburger");
const hamPopup= document.querySelector(".Ham-popup");
const hamCloseIcon= document.querySelector("#Ham-close");

hamBurgerIcon.addEventListener("click", function(ev){
    console.log("hi");
    ev.preventDefault();
    hamPopup.classList.remove("hidden");
});
hamCloseIcon.addEventListener("click", function(ev){
    ev.preventDefault();
    hamPopup.classList.add("hidden");
});
// 
