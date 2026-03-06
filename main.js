const btnMenuAmburguer = document.querySelector("#menu-amburguer");
const menuLateral = document.querySelector(".menu-lateral");
const btnFecharMenu = document.querySelector(".btn-close");


btnMenuAmburguer.addEventListener("click",function(){
    menuLateral.style.display = "block"
    setTimeout(function(){
        menuLateral.classList.add("menu-ativo");
    },100)
    
})
btnFecharMenu.addEventListener("click",function(){
    menuLateral.classList.remove("menu-ativo");
})