const btnMenuAmburguer = document.querySelector("#menu-amburguer");
const menuLateral = document.querySelector(".menu-lateral");
const btnFecharMenu = document.querySelector(".btn-close");


btnMenuAmburguer.addEventListener("click",function(){
    menuLateral.classList.add("menu-ativo");
    
})
btnFecharMenu.addEventListener("click",function(){
    menuLateral.classList.remove("menu-ativo");
})