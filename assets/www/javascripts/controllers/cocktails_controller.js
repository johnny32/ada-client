/**************************
 *  COCKTAILS CONTROLLER  *
 **************************/

//Character reminder function
(function($) {
    $.fn.extend( {
        limiter: function(limit, elem) {
            $(this).on("keyup focus", function() {
                setCount(this, elem);
            });
            function setCount(src, elem) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                elem.html( limit - chars );
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

    var selected_data = new Object();

    selected_data.zumo = new Array();
    selected_data.licor = new Array();
    selected_data.carbonico = new Array();
    selected_data.vaso = new Array();
    selected_data.nombre = "";
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
        wrapper.append('<div class="swiper-slide" id="' + actual_product + $(this).attr("id") + '">' + '<div id="elem_title' + $(this).attr("id") + '">' + $(this).find("title").text() + '</div>' + '<div id="elem_image' + $(this).attr("id") + '">' + '<img src="../images/' + actual_product + '/' + $(this).find("image").text() + '" class="cocktail_slide_image">' + '</div>' + '</div>');
      });

      //Swiper Scroller

      mySwiper = $('.swiper-container').swiper({
        pagination : '.pagination1',
        loop : true
      });
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
      fillRemain : function() {
        if (actual_remain > 0) {
          $('#remain_elem').html("Puedes añadir " + actual_remain + " elementos más");
          $('#add_elem').removeAttr("disabled");
        } else {
          $('#add_elem').attr("disabled", "true");
          $('#remain_elem').html("No puedes añadir más elementos.</br>Pulsa en Finalizar sección para continuar con la creación de tu coaktail");
        }
      },
      add_element_function : function() {
        var element_id = mySwiper.activeSlide

        var elem = new Object();
        elem.id = element_id
        elem.title = $('#elem_title' + element_id).text()

        //Check if element isn't in array
        var trobat = false;

        for (var i = 0; i < actual_array.length; i++) {
          if (actual_array[i].id == elem.id) {
            alert("No se puede añadir dos veces el mismo elemento");
            trobat = true;
            break;
          }
        }

        if (!trobat) {
          actual_array[actual_array.length] = elem;
          actual_remain--;
          cocktails.fillRemain();
        }
      },
      finish_element_function : function() {
        if (actual_array.length == 0) {
          alert("Necesitas añadir como mínimo un elemento")
        } else {

          //Reload page with licores data

          if (actual_product == "zumo") {
            actual_product = "licor"
            actual_array = selected_data.licor;
            actual_remain = remain_licores;
            $('#title').html("LICORES")
          } else if (actual_product == "licor") {
            actual_product = "carbonico";
            actual_array = selected_data.carbonico;
            actual_remain = remain_carbonico;
            $('#title').html("CARBONICOS")
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
           
            $('.swiper-container').html('<input type="text" id="cocktail_name" maxlength="30"/>' + 'Te quedan <b><span id="myCounter">30</span></b> caracteres para el nombre</font>');
            
            var elem = $('#myCounter');
            $('#cocktail_name').limiter(30,elem);
            
            $('#swiper-pagination').remove();
            $('#remain_elem').remove();
            $('#add_elem').remove();
            $('#finish_elem').hide();
            $('#buttons').append('<input type="button" id="finish_cocktail" value="¡Mezclar!" />');
            $('#finish_cocktail').click(cocktails.finishCocktail);
          }
        }
      },
      finishCocktail : function() {
        alert("Mezclar!!!");
        selected_data.nombre = $('#cocktail_name').val();

        var json = JSON.stringify(selected_data);
        alert(json);

        //Fadeout other elements
        
        window.localStorage.clear();
        
        if(window.localStorage.getItem("n_cocktails") == null){
          window.localStorage.setItem("n_cocktails", 0);
        }
        
        window.localStorage.setItem("n_cocktails", parseInt(window.localStorage.getItem("n_cocktails")) + 1);

        window.localStorage.setItem(window.localStorage.getItem("n_cocktails"), selected_data);
        
        loadPage('makeCocktail_final.html');
      }
    };
  }();

  cocktails.addData2Page();
  cocktails.fillRemain();

  $('#add_elem').click(cocktails.add_element_function);
  $('#finish_elem').click(cocktails.finish_element_function);

});
