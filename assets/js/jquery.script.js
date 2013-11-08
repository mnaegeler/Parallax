$(document).ready(function(){
    var bodyHeight = $('body').height();
    $('div.divParallax').height(bodyHeight);

    $('div.divParallax').each(function(){
        var $obj = $(this);
        var $objId = $obj.attr('id');

        // Posição inicial vertical e horizontal do background de cada elemento
        // Elemento 01
        if($objId == 'element-1'){
            var verticalInicial = 500; // Posição inicial vertical do elemento (deve ser o mesmo do que consta no CSS, para não haver divirgências)
            var horizontalInicial = 50 + '%'; // Posição inicial horizontal do elemento podendo ser pixels ou percents (deve ser o mesmo do que consta no CSS, para não haver divirgências)
        }
        // Elemento 02
        else if($objId == 'element-2'){
            var verticalInicial = 200;
            var horizontalInicial = 25 + '%';
        }
        

        // Após verificar, executa:
        $(window).scroll(function() {
            var speedScroll = -($(window).scrollTop() / $obj.data('speed')); // Puxa o valor que a página desceu e divide pelo data-speed que determina a velocidade de rolamento
            var incrementaPosition = speedScroll + verticalInicial;
            var bgPosition = horizontalInicial + ' ' + incrementaPosition + 'px';
            $obj.css('background-position', bgPosition );
        });
    });
});
$(window).load(function(){
    $('div#Content').fadeTo('slow', 0.75);
});