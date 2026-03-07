const btnMenuAmburguer = document.querySelector("#menu-amburguer");
const menuLateral = document.querySelector(".menu-lateral");
const menuVertical = document.querySelector(".menu-vertical");
const corpoMenuVertical = document.querySelector(".menu-vertical-corpo");
const btnFecharMenu = document.querySelector(".btn-close");
const botoesInspecionar = document.querySelectorAll(".botao-inspecionar");
const botaoVoltar = document.querySelector(".botao-voltar");



btnMenuAmburguer.addEventListener("click",function(){
    menuLateral.style.display = "block";
    document.body.style.overflow = 'hidden';
    setTimeout(function(){
        menuLateral.classList.add("menu-ativo");
    },100)
    
})
btnFecharMenu.addEventListener("click",function(){
    menuLateral.classList.remove("menu-ativo");
    document.body.style.overflow = 'auto'; 
})

botoesInspecionar.forEach(botao =>{
    botao.addEventListener("click",function(){
        const colunaProduto = botao.closest(".produto");

        let dados = {
            img: colunaProduto.querySelector("img").src,
            nomeProduto : colunaProduto.querySelector("h6").innerText,
            valor : colunaProduto.querySelector("strong").innerText,
        }
        corpoMenuVertical.innerHTML = `<div class="container">
                        <h3 class="mb-3 mt-3">${dados.nomeProduto}</h3>
                        <h4 class="text-center mb-3">${dados.valor}</h4>
                        <button class="btn btn-dark botao-adicionar-carrinho">+ Adicionar ao carrinho</button>
                    <div class="container-favoritos-e-detalhes d-flex d-flex justify-content-between">
                        <div class="botao-adicionar-favoritos d-flex justify-content-center align-items-center gap-2">
                            <i class="fa-regular fa-heart"></i>
                            <p class="mb-0">Adicionar ao favoritos</p>
                        </div>
                        <div class="botao-adicionar-favoritos d-flex justify-content-center align-items-center gap-2">
                            <i class="fas fa-info-circle"></i>
                            <p class="mb-0">Detalhes</p>
                        </div>
                    </div>`
        menuVertical.style.display = "block";
        document.body.style.overflow = 'hidden'; // impede o scroll do body
        $('.slider-for').slick('setPosition');
        $('.slider-nav').slick('setPosition');

        setTimeout(function(){
        menuVertical.classList.add("menu-vertical-ativo");
        document.querySelector(".faixa-alerta").style.top = "80px"
        },100)
    })
})
botaoVoltar.addEventListener("click",function(){
    menuVertical.classList.remove("menu-vertical-ativo");
    document.body.style.overflow = 'auto'; // Restaura o scroll do body
    setTimeout(function(){
        menuVertical.style.display = "none";
        document.querySelector(".faixa-alerta").style.top = "60px"
    },100)
})


$(document).ready(function(){
    $('#carouselprodutos').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false, 
        arrows: false,
        dots: true,
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
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
});