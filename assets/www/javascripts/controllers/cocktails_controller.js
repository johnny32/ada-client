/**************************
 *  COCKTAILS CONTROLLER  *
 **************************/

//Character reminder function
(function($) {
  $.fn.extend({
    limiter : function(limit, elem) {
      $(this).on("keyup focus", function() {
        setCount(this, elem);
      });
      function setCount(src, elem) {
        var chars = src.value.length;
        if (chars > limit) {
          src.value = src.value.substr(0, limit);
          chars = limit;
        }
        elem.html(limit - chars);
      }

      setCount($(this)[0], elem);
    }
  });
})(jQuery);

$(document).ready(function($) {
  
  var cocktails = function() {
    var remain_zumos = 3;
    var remain_licores = 3;
    var remain_carbonico = 1;
    var remain_vasos = 1;
    var remain_nombre = 20;

    var without_alcohol = false;

    var selected_data = new Object();

    selected_data.zumo = new Array();
    selected_data.licor = new Array();
    selected_data.carbonico = new Array();
    selected_data.vaso = new Array();
    selected_data.nombre = "";
    selected_data.creador = "";
    selected_data.color = "";

    var allData = new Object();

    var mySwiper

    var actual_product = "Zumo";
    var actual_array = selected_data.zumo;
    var actual_remain = remain_zumos;

    var maxL = 30;

    function jsonParser(ingredients) {
      //Hide the loader gif
      $('#element_loading').fadeOut();
      
      console.log(ingredients[0].imagen);

      $.each(ingredients, function(key, value){
        //alert("key: " + key + " element: " + value.descripcion);
        var images_route;
        var wrapper = $('.swiper-wrapper');
        wrapper.append('<div class="swiper-slide" id="' + actual_product + key + 
          '">' + '<div id="elem_title' + key + '" style="font-size: 22px; margin: 10px 0 10px 0;">' + 
          value.descripcion + '</div>' + '<div id="elem_image' + key + '">' + 
          '<img class="cocktail_slide_image" src="' + server_url + images_ingredients_route + "/" +value.imagen + '">' + '</div>' + '</div>');
          
          $('#add_elem').fadeIn();
          $('#finish_elem').fadeIn();
      });
      
      //Swiper Scroller

      mySwiper = $('.swiper-container').swiper({
        pagination : '.pagination1',
        loop : true
      });
    }

    //Confirmar si es vol un cocktail sense alcohol
    function confirmWithoutAlcohol(button) {
      if (button == 1) {
        without_alcohol = true;
        finish_function();
      }
    }

    //Funcio per a confirmar una seccio
    function confirmSection(button) {
      if (button == 1) {
        //S'ha clicat a si
        finish_function();
      } else if (button == 2) {
        //S'ha clicat a cancelar
        $('#finish_elem_p').text("Finalizar sección");
        if (actual_product == "Zumo") {
          actual_remain = remain_zumos;
          selected_data.zumo = new Array();
          actual_array = selected_data.zumo;
        } else if (actual_product == "Licor") {
          actual_remain = remain_licores;
          selected_data.licor = new Array();
          actual_array = selected_data.licor;
          $('#finish_elem_p').text("Cocktail sin alcohol");
        } else if (actual_product == "Carbonico") {
          actual_remain = remain_carbonico;
          selected_data.carbonico = new Array();
          actual_array = selected_data.carbonico;
        } else if (actual_product == "Vaso") {
          actual_remain = remain_vasos;
          selected_data.vaso = new Array();
          actual_array = selected_data.vaso;
        }
        cocktails.fillRemain();
        mySwiper.swipeTo(0);
      }
    }

    //Funcio per a finalitzar una seccio (ja confirmada)
    function finish_function() {
      if ((actual_product == 'Licor' && without_alcohol == true) || actual_array.length > 0) {
        if (actual_product == "Zumo") {
          actual_product = "Licor"
          actual_array = selected_data.licor;
          actual_remain = remain_licores;
          $('#title').html("LICORES")
          $('#finish_elem_p').text("Cocktail sin alcohol");
        } else if (actual_product == "Licor") {
          actual_product = "Carbonico";
          actual_array = selected_data.carbonico;
          actual_remain = remain_carbonico;
          $('#title').html("CARBONICOS")
          $('#finish_elem_p').text("Finalizar sección");
        } else if (actual_product == "Carbonico") {
          actual_product = "Vaso";
          actual_array = selected_data.vaso;
          actual_remain = remain_vasos;
          $('#title').html("VASOS");
        } else {
          actual_product = "nombre"
          actual_remain = remain_nombre;
          $('#title').html("NOMBRE");
        }

        if (actual_product != "nombre") {
          $('.swiper-container').html("");
          $('.swiper-container').html('<div class="swiper-wrapper"></div>');
          cocktails.addData2Page();
          cocktails.fillRemain();
          $('#add_elem').fadeOut();
          $('#finish_elem').fadeOut();
        } else {
          $('.swiper-container').html("");

          $('.swiper-container').html('<div class="name_container"><input type="text" id="cocktail_name" maxlength="30"/><br />' + 'Te quedan <b><span id="myCounter">30</span></b> caracteres para el nombre</div>');

          var elem = $('#myCounter');
          $('#cocktail_name').limiter(30, elem);

          $('#swiper-pagination').remove();
          $('#remain_elem').remove();
          $('#add_elem').remove();
          $('#finish_elem').hide();
          $('#buttons').html('<div class="cocktails-main-center"><a id="finish_cocktail"><img class="button-main-menu" src="../images/ic_cocktail_checkmark.png"/><p>Mezclar</p></a></div><div class="cocktails-main-bottom"></div>');
          $('#finish_cocktail').click(cocktails.finishCocktail);
        }
      }
    }

    function confirmName(button) {
      if (button == 1) {
        selected_data.nombre = $('#cocktail_name').val();

        //Parsejem el JSON per al servidor
        
        cocktail_final = new Object();
        cocktail_final.zumos = new Array();
        for(var i = 0;i < selected_data.zumo.length; i++){
          cocktail_final.zumos[i] = selected_data.zumo[i].nombre;
        }
        cocktail_final.licores = new Array();
        for(var i = 0;i < selected_data.licor.length; i++){
          cocktail_final.licores[i] = selected_data.licor[i].nombre;
        }
        cocktail_final.carbonico = selected_data.carbonico[0].nombre;
        cocktail_final.vaso = selected_data.vaso[0].nombre;
        cocktail_final.nombre = selected_data.nombre;
        cocktail_final.color = "";
        cocktail_final.creador = "";
        alert("Cocktail: " + JSON.stringify(cocktail_final));
        window.localStorage.setItem("cocktail_temp", JSON.stringify(cocktail_final));
        loadPage('makeCocktail_final.html');
      }
      else{
        $('#cocktail_name').val("");
      }
    }

    return {
      addData2Page : function() {
        $('#element_loading').show();
        $.ajax({
          type : "GET",
          url : server_url + ingredients_route + "/" + actual_product,
          dataType : "json",
          success : jsonParser,
          error: function(header, status, from){
            alert("Error con el servidor");
          }
        });
      },
      //Emplenar el text de quants productes es poden escollir de més
      fillRemain : function() {
        if (actual_remain > 0) {
          $('#remain_elem').html("Puedes añadir " + actual_remain + " elementos más");
          $('#add_elem').removeAttr("disabled");
        } else {
          $('#add_elem').attr("disabled", "true");
          $('#remain_elem').html("No puedes añadir más elementos.</br>Pulsa en Finalizar sección para continuar con la creación de tu cocktail");
        }
      },
      add_element_function : function() {
        
        if (actual_remain == 0) {
          //navigator.notification.alert("No puedes añadir más elementos en esta sección", null, "Elementos máximos");
          alert("No puedes añadir más elementos en esta sección");
        }
        else{
          var element_id = mySwiper.activeSlide
          var elem = new Object();
          elem.id = element_id;
          elem.nombre = $('#elem_title' + element_id).text();
  
          //Check if element isn't in array
          var trobat = false;
          for (var i = 0; i < actual_array.length; i++) {
            if (actual_array[i].id == element_id) {
              //navigator.notification.alert("No se puede añadir dos veces el mismo elemento", null, "Elemento repetido")
              alert("No se puede añadir dos veces el mismo elemento");
              trobat = true;
              break;
            }
          }
  
          if (!trobat) {
            $('#finish_elem_p').text("Finalizar sección");
            actual_array[actual_array.length] = elem;
            actual_remain--;
            cocktails.fillRemain();
            $('#element_loading').show();
            var t=setTimeout(function(){
              $('#element_loading').hide();
            },300);
          }
        }
      },
      finish_element_function : function() {
        if (actual_array.length == 0) {
          if (actual_product == "Licor") {
            //navigator.notification.confirm("¿Estás seguro de querer crear un cocktail sin alcohol?", confirmWithoutAlcohol, "Cocktail sin alcohol", 'OK, Cancelar')
            alert("¿Estás seguro de querer crear un cocktail sin alcohol?");
            confirmWithoutAlcohol(1);
          } else {
            //navigator.notification.alert("Necesitas añadir como mínimo un elemento", null, "Sección vacía")
            alert("Necesitas añadir como mínimo un elemento");
          }
        } else {
          var message = "Estás a punto de añadir: ";
          for (var i = 0; i < actual_array.length; i++) {
            message += ("\n- " + actual_array[i].nombre);
          }
          alert(message);
          //navigator.notification.confirm(message, confirmSection, "Confirmar sección", 'OK, Cancelar')
          confirmSection(1);
        }
      },
      //Finalitzar cocktail
      finishCocktail : function() {
        if ($('#cocktail_name').val() == '') {
          //º.notification.alert("Debes ponerle un nombre al cocktail", null, "Nombre vacío")
          alert("Debes ponerle un nombre al cocktail")
        } else {
          //navigator.notification.confirm("¿Es " + $('#cocktail_name').val() + " el nombre correcto?", confirmName, "Confirmar nombre", 'Mezclar, Cancelar')
          alert("¿Es " + $('#cocktail_name').val() + " el nombre correcto?");
          confirmName(1);
        }
      }
      ,
      previous_slide: function(){
        mySwiper.swipePrev();
      }
      ,
      next_slide: function(){
        mySwiper.swipeNext();
      }
    };
  }();

  cocktails.addData2Page();
  cocktails.fillRemain();

  $('#add_elem').click(cocktails.add_element_function);
  $('#finish_elem').click(cocktails.finish_element_function);
});

function rating2Image(rating) {
  var img = '../images/ratings/';
  var r = Math.round(rating);
  
  if (r <= 5 && r >= 1) {
    img += ('r' + r + '.png');
  } else {
    throw new Error('Rating incorrecto.');
  }
  
  return img;
}
