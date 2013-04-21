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

    var actual_product = "zumo";
    var actual_array = selected_data.zumo;
    var actual_remain = remain_zumos;

    var maxL = 30;

    function xmlParser(xml) {
      $('#load').fadeOut();
      //Hide the loader gif

      $(xml).find(actual_product).each(function() {
        var wrapper = $('.swiper-wrapper');
        wrapper.append('<div class="swiper-slide" id="' + actual_product + $(this).attr("id") + '">' + '<div id="elem_title' + $(this).attr("id") + '">' + $(this).find("nombre").text() + '</div>' + '<div id="elem_image' + $(this).attr("id") + '">' + '<img src="../images/' + actual_product + '/' + $(this).find("image").text() + '" class="cocktail_slide_image">' + '</div>' + '</div>');
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
        $('#finish_elem').attr("value", "Finalizar sección");
        if (actual_product == "zumo") {
          actual_remain = remain_zumos;
          selected_data.zumo = new Array();
          actual_array = selected_data.zumo;
        } else if (actual_product == "licor") {
          actual_remain = remain_licores;
          selected_data.licor = new Array();
          actual_array = selected_data.licor;
          $('#finish_elem').attr("value", "Cocktail sin alcohol");
        } else if (actual_product == "carbonico") {
          actual_remain = remain_carbonico;
          selected_data.carbonico = new Array();
          actual_array = selected_data.carbonico;
        } else if (actual_product == "vaso") {
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
      if ((actual_product == 'licor' && without_alcohol == true) || actual_array.length > 0) {

        //Reload page with licores data

        if (actual_product == "zumo") {
          actual_product = "licor"
          actual_array = selected_data.licor;
          actual_remain = remain_licores;
          $('#title').html("LICORES")
          $('#finish_elem').attr("value", "Cocktail sin alcohol");
        } else if (actual_product == "licor") {
          actual_product = "carbonico";
          actual_array = selected_data.carbonico;
          actual_remain = remain_carbonico;
          $('#title').html("CARBONICOS")
          $('#finish_elem').attr("value", "Finalizar sección");
        } else if (actual_product == "carbonico") {
          actual_product = "vaso";
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
        } else {
          $('.swiper-container').html("");

          $('.swiper-container').html('<div class="name_container"><input type="text" id="cocktail_name" maxlength="30"/><br />' + 'Te quedan <b><span id="myCounter">30</span></b> caracteres para el nombre</div>');

          var elem = $('#myCounter');
          $('#cocktail_name').limiter(30, elem);

          $('#swiper-pagination').remove();
          $('#ar_left').remove();
          $('#ar_right').remove();
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
        //alert("Mezclar!!!");
        selected_data.nombre = $('#cocktail_name').val();

        var json = JSON.stringify(selected_data);
        //alert(json);

        window.localStorage.clear();
        if (window.localStorage.getItem("n_cocktails") == null) {
          window.localStorage.setItem("n_cocktails", 0);
        }
        window.localStorage.setItem("n_cocktails", parseInt(window.localStorage.getItem("n_cocktails")) + 1);
        window.localStorage.setItem(window.localStorage.getItem("n_cocktails"), JSON.stringify(selected_data));
        loadPage('makeCocktail_final.html');
      }
    }

    return {
      addData2Page : function() {
        $.ajax({
          type : "GET",
          url : "../data/" + actual_product + ".xml",
          dataType : "xml",
          success : xmlParser
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
          navigator.notification.alert("No puedes añadir más elementos en esta sección", null, "Elementos máximos");
        }
        else{
          var element_id = mySwiper.activeSlide
          var elem = new Object();
          elem.id = element_id;
          elem.nombre = $('#elem_title' + element_id).text()
  
          //Check if element isn't in array
          var trobat = false;
          for (var i = 0; i < actual_array.length; i++) {
            if (actual_array[i].id == element_id) {
              navigator.notification.alert("No se puede añadir dos veces el mismo elemento", null, "Elemento repetido")
              trobat = true;
              break;
            }
          }
  
          if (!trobat) {
            $('#finish_elem').attr("value", "Finalizar sección");
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
          if (actual_product == "licor") {
            //navigator.notification.confirm("¿Estás seguro de querer crear un cocktail sin alcohol?", confirmWithoutAlcohol, "Cocktail sin alcohol", 'OK, Cancelar')
            confirmWithoutAlcohol(1)
          } else {
            navigator.notification.alert("Necesitas añadir como mínimo un elemento", null, "Sección vacía")
          }
        } else {
          var message = "Estás a punto de añadir: ";
          for (var i = 0; i < actual_array.length; i++) {
            message += ("\n- " + actual_array[i].title);
          }
          //navigator.notification.confirm(message, confirmSection, "Confirmar sección", 'OK, Cancelar')
          confirmSection(1)
        }
      },
      //Finalitzar cocktail
      finishCocktail : function() {
        if ($('#cocktail_name').val() == '') {
          navigator.notification.alert("Debes ponerle un nombre al cocktail", null, "Nombre vacío")
        } else {
          //navigator.notification.confirm("¿Es " + $('#cocktail_name').val() + " el nombre correcto?", confirmName, "Confirmar nombre", 'Mezclar, Cancelar')
          confirmName(1)
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
  
  $('#ar_left').click(cocktails.previous_slide);
  $('#ar_right').click(cocktails.next_slide);
});
