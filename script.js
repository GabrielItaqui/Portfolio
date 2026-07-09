$(document).ready(function(){
    // Comportamento do scroll (Navbar fixa e Botão Scroll Up)
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Clique para subir suavemente até ao topo
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Inicialização do Typed.js com o Posicionamento de Elite
    var typed = new Typed(".typing", {
        strings: ["Engenheiro de Soluções Back-End", "Especialista em Automação & Processos", "Arquiteto de Sistemas"],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true
    });
    
    // Toggle do Menu Mobile (Navbar Ativa e Ajuste do Ícone)
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn ion-icon').toggleClass("active");
    });
});
