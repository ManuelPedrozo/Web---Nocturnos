$(document).ready(function(){

  //PARALAX===========================================================================

  let parallaxElements = document.querySelectorAll('.parallax'), speedVertical = 0, speedHorizontal = 0

  document.addEventListener('scroll',apply2DEffects)


  function apply2DEffects() {

      parallaxElements.forEach(function(element){
          if (element.dataset.direction === 'vertical'){
            speedVertical = element.dataset.speed * element.getBoundingClientRect().top
          }
          else {
            speedVertical = 0
          }


          if (element.dataset.direction === 'horizontal'){
            speedHorizontal = element.dataset.speed * element.getBoundingClientRect().top
          }
          else{
            speedHorizontal = 0

          }

          element.style.transform = 'translate(${speedHorizontal}px, ${speedVertical}px)'

      })

  }


  //AGREGANDO LA CLASE ACTIVE AL PRIMER ENLACE ====================
  $('.lista_epocas .categoria_elemento[category="all"]') .addClass('ct_item-active');

  //FILTRANDO TODOS LOS AUTORES POR EPOCA=============================================
  $('.lista_epocas .categoria_elemento').click(function(){

    var catAutor = $(this).attr('category');
    console.log(catAutor);

    // AGREGANDO LA CLASE ACTIVE AL ENLACE DE EPOCA============
    $('.categoria_elemento').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');

    //OCULTANDO AUTORES==============
    $('.autor_epoca').slideUp(1000);

    //MOSTRANDO AUTORES==============
    $('.autor_epoca[category="'+catAutor+'"]').slideDown(1000);

  });

  //MOSTRANDO TODOS LOS AUTORES======
  $('.categoria_elemento[category=all]').click(function(){
    $('.autor_epoca').slideToggle(lineal);
  })

  //FILTRANDO TODOS LOS POEMAS POR AUTOR==============================================
  $('.lista_autores .autor_epoca[autor="all"]') .addClass('ct_autor-active')

  //FILTRANDO TODOS LOS POEMAS POR AUTOR=========
  $('.lista_autores .autor_epoca').click(function(){
    var catPoemas = $(this).attr('autor');
    console.log(catPoemas);

    //AGREGANDO LA CLASE ACTIVE AL ENLACE DE AUTOR===========
    $('.autor_epoca').removeClass('ct_autor-active');
    $(this).addClass('ct_autor-active');

    //OCULTANDO POEMAS=======================
    $('.poema_autor').hide();

    //MOSTRANDO POEMAS======================
    $('.poema_autor[autor="'+catPoemas+'"]').slideDown(2000);


  })

  //FILTRANDO EL POEMA SELECCIONADO===================================================
  $('.lista_poemas .poema_autor[poema="all"]') .addClass('ct_poema-active')

  //FILTRANDO EL POEMA ENTRE LOS DEL AUTOR============
  $('.lista_poemas .poema_autor').click(function(){
    var catPoema = $(this).attr('poema');
    console.log(catPoema);

    //AGREGANDO LA CLASE ACTIVE AL POEMA SELECCIONADO===
    $('.poema').removeClass('ct_poema-active');
    $(this).addClass('ct_poema-active');

    //OCULTANDO POEMAS===================
    $('.poema').hide();

    //MOSTRANDO POEMA==============================
    $('.poema[poema="'+catPoema+'"]').slideDown(5000);

    //CONDICIONAL =======
  //if (console.log(catPoema) == console.log() {
    //    console.log(catPoema);
    //} else {
      //$('.poema').hide();
    //}

  })


});
