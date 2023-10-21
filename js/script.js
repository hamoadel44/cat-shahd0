const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
})

 function hundleMenu(){ 
    // alert("salam");
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
 }