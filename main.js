const btnMenuAmburguer = document.querySelector("#menu-amburguer");
const menuLateral = document.querySelector(".menu-lateral");
const menuVertical = document.querySelector(".menu-vertical");
const btnFecharMenu = document.querySelector(".btn-close");
const botoesInspecionar = document.querySelectorAll(".botao-inspecionar");
const botaoVoltar = document.querySelector(".botao-voltar");



btnMenuAmburguer.addEventListener("click",function(){
    menuLateral.style.display = "block"
    setTimeout(function(){
        menuLateral.classList.add("menu-ativo");
    },100)
    
})
btnFecharMenu.addEventListener("click",function(){
    menuLateral.classList.remove("menu-ativo");
})

botoesInspecionar.forEach(botao =>{
    botao.addEventListener("click",function(){
        menuVertical.style.display = "block";

        setTimeout(function(){
        menuVertical.classList.add("menu-vertical-ativo");
        },100)

    })
})
botaoVoltar.addEventListener("click",function(){
    menuVertical.classList.remove("menu-vertical-ativo");
    setTimeout(function(){
        menuVertical.style.display = "none";
    },100)
})


$(document).ready(function(){
    $('#carouselprodutos').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false, 
        arrows: false,
        dots: false,
    });
    $('.popup-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300
        },
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return 'Echo Moda - Coleção Exclusiva';
            }
        }
});
});