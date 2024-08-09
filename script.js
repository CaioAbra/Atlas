const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('nav'); // Seleciona o elemento <nav>

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active'); // Usa vanilla JavaScript para adicionar/remover a classe 'active'
});


$('.accordion-header').click(function () {
    const target = $(this).data('target'); // Obtém o ID do item correspondente
    const $body = $(target);
    const $header = $(this); // Armazena o header clicado
    const arowUp = `<img src="./src/img/arrow.svg" alt="" srcset="">`;
    const arowDown = `<img src="./src/img/arrowDown.svg" alt="" srcset="">`;

    // Verifica se o corpo está aberto
    if ($body.hasClass('open')) {
        // Se estiver aberto, fecha-o
        $body.slideUp(300, function () {
            $body.removeClass('open'); // Remove a classe "open" do corpo
            $header.removeClass('open'); // Remove a classe "open" do header correspondente
            // $header.find('.icon').text('+'); // Muda ícone para +
            $header.find('.icon').html(arowDown); // Muda ícone para +
        });
    } else {
        // Se não estiver aberto, fecha todos os outros
        $('.accordion-body').slideUp(300).removeClass('open');
        $('.accordion-header').removeClass('open'); // Remove a classe "open" de todos os headers
        // $('.accordion-header .icon').text('+'); // Reseta todos os ícones para +
        $('.accordion-header .icon').html(arowUp); // Reseta todos os ícones para +

        // Abre o corpo atual
        $body.slideDown(300, function () {
            $body.addClass('open'); // Adiciona a classe "open" ao corpo atual
            $header.addClass('open'); // Adiciona a classe "open" ao header correspondente
            // $header.find('.icon').text('-'); // Muda ícone para -
            $header.find('.icon').html(arowDown); // Muda ícone para -
        });
    }
});



// carousel
$(document).ready(function () {
    var itemWidth = $(".carousel-items .item").outerWidth(true);
    var itemCount = $(".carousel-items .item").length;
    var windowWidth = $(window).width();
    var visibleItems = 3; // Número de itens visíveis
    var responsiveThreshold1 = 500; // Limite de largura para dispositivos até 500px
    var responsiveThreshold2 = 768; // Limite de largura para dispositivos de 501px a 767px

    function moveCarousel(direction) {
        var currentPosition = parseInt($(".carousel-items").css("left"));
        var newPosition;

        if (direction === "next") {
            newPosition = currentPosition - itemWidth;
            $(".carousel-items").animate(
                { left: newPosition },
                500,
                function () {
                    $(".carousel-items .item:first").appendTo(".carousel-items");
                    $(".carousel-items").css("left", 0);
                    updateActiveItem();
                }
            );
        } else {
            newPosition = currentPosition + itemWidth;
            $(".carousel-items").animate(
                { left: newPosition },
                500,
                function () {
                    $(".carousel-items .item:last").prependTo(".carousel-items");
                    $(".carousel-items").css("left", -itemWidth);
                    updateActiveItem();
                }
            );
        }
    }

    function updateActiveItem() {
        $(".carousel-items .item").removeClass("active");
        var activeItemIndex = Math.floor(visibleItems / 2);
        $(".carousel-items .item:nth-child(" + (activeItemIndex + 1) + ")").addClass("active");
    }

    function adjustCarousel() {
        if (windowWidth <= responsiveThreshold1) {
            visibleItems = 1;
        } else if (windowWidth <= responsiveThreshold2) {
            visibleItems = 2;
        } else {
            visibleItems = 3;
        }

        itemWidth = $(".carousel-items .item").outerWidth(true);
        $(".carousel-items").width(itemWidth * itemCount);
        updateActiveItem();
    }

    adjustCarousel();

    $(window).resize(function () {
        adjustCarousel();
    });

    $(".slider-prev").click(function () {
        moveCarousel("prev");
    });

    $(".slider-next").click(function () {
        moveCarousel("next");
    });
});

//animação de scroll
$(window).scroll(function () {
    let section = $('section.mockUp .computer');
    let image = $('.efeito');
    let computer = $('.mockUp .computer');
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let sectionOffset = section.offset().top;
    let sectionHeight = section.height();

    let sectionMiddle = sectionOffset + sectionHeight / 2;
    let viewportMiddle = scrollTop + windowHeight / 2;

    if (viewportMiddle > sectionOffset && viewportMiddle < sectionOffset + sectionHeight) {

        if ($(window).width() < 768) {
            image.css('transform', 'scale(1.5) translateY(50%) translateX(40%)');
            computer.css('transform', 'scale(1)');
        } else {
            //desk
            image.css('transform', 'scale(.7) translateY(40%) translateX(50%)');
            computer.css('transform', 'scale(.9)');
        }

    } else {
        if ($(window).width() < 768) {
            image.css('transform', 'scale(1) translateY(50%)');
            computer.css('transform', 'scale(1)');
        } else {
            image.css('transform', 'scale(.8) translateY(-17%)');
            computer.css('transform', 'scale(1)');
        }
    }
});


