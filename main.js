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

// Inicializa o carrossel de produtos com Slick
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