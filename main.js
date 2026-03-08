const btnMenuAmburguer = document.querySelector("#menu-amburguer");
const menuLateral = document.querySelector(".menu-lateral");
const menuVertical = document.querySelector(".menu-vertical");
const btnFecharMenu = document.querySelector(".btn-close");
const botoesInspecionar = document.querySelectorAll(".botao-inspecionar button");


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
        // Encontra o card do produto clicado
        const colunaProduto = botao.closest(".produto");

        const detalhesElement = colunaProduto.querySelector(".detalhes-produto");
        const dados = {
            nomeProduto : colunaProduto.querySelector("h6.text-center").innerText,
            valor : colunaProduto.querySelector("strong p.text-center").innerText,
            img: colunaProduto.querySelector("img").src,
            detalhes: detalhesElement ? detalhesElement.innerHTML : "",
        }
        

        // Seleciona os elementos dentro do menu vertical que serão atualizados
        const corpoMenuVertical = menuVertical.querySelector('.menu-vertical-corpo');
        const sliderFor = menuVertical.querySelector('.slider-for');
        const sliderNav = menuVertical.querySelector('.slider-nav');

        // Destrói as instâncias anteriores do Slick para evitar conflitos
        if ($(sliderFor).hasClass('slick-initialized')) {
            $(sliderFor).slick('unslick');
        }
        if ($(sliderNav).hasClass('slick-initialized')) {
            $(sliderNav).slick('unslick');
        }

        let slidesHtml = `<div><img src="${dados.img}"></div>`;
        let navHtml = `<div><img src="${dados.img}"></div>`;

        const fotosGaleria = colunaProduto.querySelectorAll(".fotos-galeria img");

        if (fotosGaleria.length > 0) {
            fotosGaleria.forEach(img => {
                slidesHtml += `<div><img src="${img.src}"></div>`;
                navHtml += `<div><img src="${img.src}"></div>`;
            });
        }
        
        sliderFor.innerHTML = slidesHtml;
        sliderNav.innerHTML = navHtml;

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
            </div>
            ${dados.detalhes ? `<div class="detalhes mt-4">
                <h1 class="text-center">Detalhes do produto</h1>
                ${dados.detalhes}
            </div>` : ''}
        </div>`;

        // Exibe o menu vertical e trava o scroll do corpo da página
        menuVertical.style.display = "block";
        document.body.style.overflow = 'hidden';

        // Inicializa o Slick nos sliders que acabaram de ser populados
        $('.slider-for').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.slider-nav' });
        $('.slider-nav').slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: '.slider-for', dots: true, centerMode: true, focusOnSelect: true });

        // Adiciona a classe para a animação de entrada
        setTimeout(function(){
            menuVertical.classList.add("menu-vertical-ativo");
            document.querySelector(".faixa-alerta").style.top = "80px"
        },100)
    })
})

// Usa delegação de eventos para o botão de voltar, pois ele é recriado dinamicamente
menuVertical.addEventListener("click", function(e) {
    if (e.target.classList.contains("botao-voltar")) {
        menuVertical.classList.remove("menu-vertical-ativo");
        document.body.style.overflow = 'auto';
        setTimeout(function(){
            menuVertical.style.display = "none";
            document.querySelector(".faixa-alerta").style.top = "60px"
        }, 500) // Aumenta o tempo para a animação de saída concluir
    }
});

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
});