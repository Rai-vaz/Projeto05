$(function(){
    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0;

    $('.pointer-barra').mousedown(
        function(){
            isDrag = true;
        }
    );

    $(document).mouseup(
        function(){
            isDrag = false;
        }
    );

    $('.barra-preco').mousemove(
        //variável e é a posição do mouse
        function(e){
            if(isDrag){
                //mouseX posição do mouse
                var elBase = $(this);
                var mouseX = e.pageX - elBase.offset().left;
                
                if (mouseX < 0) {
                    mouseX = 0;
                }

                if (mouseX > elBase.width()) {
                    mouseX = elBase.width();
                }

                $('.pointer-barra').css('left',(mouseX-13)+'px');
                currentValue = (mouseX / elBase.width()) * 100;
                $('.barra-preco-fill').css('width',currentValue+'%');

                preco_atual = (currentValue/100) * preco_maximo;
                //formatando o valor
                const formatter = new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL',
                    maximumFractionDigits:2
                })

                preco_atual = formatter.format(preco_atual);
                $(".preco_pesquisa").html("R$ "+preco_atual);
            }
        }
    );

    initSlider();
    navigateSlider();
    clickSlider();
    showDepoimentos();
    checkUrl();

    var imgShow = 3;
    //a função ceil arredonda para o próximo número inteiro
    var maxIndex = Math.ceil($('.mini-img').length/3) - 1;
    var curIndex = 0;

    

    function initSlider(){
        var amt = $('.mini-img').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img');
        //a div nav-galeria-wraper ficará com sua largura com a quantidade de foto vezes 33.3 isso em porcentagem
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');
    }

    function navigateSlider(){
        $('.arrow-right-nav').click(
            function(){
                if (curIndex < maxIndex) {
                    //isso significa que a variável recebe mais um
                    curIndex++;
                    var elOff = $('.mini-img').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                    $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
                }else{
                    //console.log("Chegamos no final");
                }
            }
        );

        $(".arrow-left-nav").click(
            function(){
                if (curIndex > 0) {
                    //isso significa que a variável recebe menos um
                    curIndex--;
                    var elOff = $('.mini-img').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                    $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
                }else{
                    //console.log("Chegamos no final");
                }
            }
        );
    }

    function clickSlider(){
        $('.mini-img').click(
            function(){
                $('.mini-img').css('border','17px solid white');
                $(this).css('border','3px solid red');
                //pegando a imagem da div mini-img
                var img = $(this).css('background-image');
                //colocando essa imagem na div foto-destaque
                $('.foto-destaque').css('background-image',img);
            }
        );
    }

    //dando um click na div mini-img com código
    $('.mini-img').eq(0).click();

    /*$('a[goto=contato]').click(
        function(){
            $('li a').css('color','#551a8b');
            $('a[goto=contato]').css('color','#EB2D2D');
            var top_of_element = $('.contato').offset().top;
            $('html,body').animate({'scrollTop': top_of_element},3000);

            //como o a á um link isso evita que a página seja recarregada
            return false
        }
    );*/

    $('.menu-mobile').click(
        function(){
            $('.menu-mobile ul').slideToggle();
        }
    );

   

    var amtDepoimento = $('.texto-depoimento').length;
    var curDepoimento = 0;

    function showDepoimentos(){
        $('.texto-depoimento').hide();
        $('.texto-depoimento').eq(0).show();
        $('.nome-depoimento p').hide();
        $('.nome-depoimento p').eq(0).show();
    }

    $('#next').click(
        function(){
            curDepoimento++;
            //Aqui se o meu curDepoimento for igual ao total de depoimeto isso significa que está no último, então o voltará para o 0
            if (curDepoimento == amtDepoimento) {
                curDepoimento = 0;
            }
            $('.texto-depoimento').hide();
            $('.texto-depoimento').eq(curDepoimento).fadeIn(1000);
            $('.nome-depoimento p').hide();
            $('.nome-depoimento p').eq(curDepoimento).fadeIn(1000);
    
        }
    );

    $('#prev').click(
        function(){
            curDepoimento--;
            if (curDepoimento < 0) {
                // amtDepoimento retorna o valor 3, mas a função eq() comeca em 0 então devo diminuir 1
                // o zero também deve passar pois esse 0 pode ser usado como indice para o eq
                curDepoimento = amtDepoimento - 1;
            }
            $('.texto-depoimento').hide();
            $('.texto-depoimento').eq(curDepoimento).fadeIn(1000);
            $('.nome-depoimento p').hide();
            $('.nome-depoimento p').eq(curDepoimento).fadeIn(1000);

        }
    );

    function checkUrl(){
        var url = location.href.split('/');
        // -1 porque a última posição é o tamanho do array a sintaxe retorna o valor da penultima posição do array
        var curPage = url[url.length-1].split('?');

        if (curPage[1] != undefined && curPage[1] == 'contato') {
            $('a[goto=contato]').css('color','#EB2D2D');
            var top_of_element = $('.contato').offset().top;
            $('html,body').animate({'scrollTop': top_of_element},3000);
        }else{
            if (curPage[0] == "") {
            $('a[href=home]').css('color','#eb2d2d');

            }else{
                $('a[href='+curPage[0]).css('color','#eb2d2d');

            }

        }

        
    }


});