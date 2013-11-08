$(document).ready(function(){
    var bodyHeight = $('body').height();
    $('div.divParallax').height(bodyHeight);

    $('div.divParallax').each(function(){
        var $obj = $(this);
        var objId = $obj.attr('id');
        
        // Posição inicial vertical do background de cada elemento
        var posInicial_1 = 500; // Elemento 01
        var posInicial_2 = 200; // Elemento 02
        var posInicial_3 = 150; // Elemento 03
        var posInicial_4 = 600; // Elemento 04
        
        

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $obj.data('speed')); // Puxa o valor que a página desceu e divide pelo data-speed que determina a velocidade de rolamento
            
            if(objId == 'element-1'){
                var incrementaPos = yPos + posInicial_1; // Puxa o valor do bakground-position inicial e soma com o incremento
                var bgpos = '50% '+ incrementaPos + 'px'; // Escreve o background-position no css
            }else if(objId == 'element-2'){
                var incrementaPos = yPos + posInicial_2;
                var bgpos = '25% '+ incrementaPos + 'px';
            }

            else if(objId == 'element-3'){
                var incrementaPos = yPos + posInicial_3;
                var bgpos = '90% '+ incrementaPos + 'px';
            }
            else if(objId == 'element-4'){
                var incrementaPos = yPos + posInicial_4;
                var bgpos = '10% '+ incrementaPos + 'px';
            }
            
            var incrementaPos = yPos + posInicial_1;
            
            var bgposHorizontal = '50% ' + incrementaPos + 'px';
            $obj.css('background-position', bgposHorizontal );
        });
    });
});
$(window).load(function(){
    $('div#Content').fadeTo('slow', 0.75);
});