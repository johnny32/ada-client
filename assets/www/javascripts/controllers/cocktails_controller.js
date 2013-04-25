//Cocktails controller

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

var allData = new Object();

var mySwiper

var actual_product = "zumo";
var actual_array;
var actual_remain;

maxL=20;


$(document).ready(function($) {

 /* var cocktails = function()
    var actual_product = ZUMO;
    //Set actual product
    return {
      addZumo: function() {
        
      }
    };
  }();

  //cocktails.addZumos();
  */
  
  actual_array = selected_data.zumo;
  actual_remain = remain_zumos; 
  
  addData2Page();
  fillRemain();
  
  //Add button function
  $('#add_elem').click(function(){
    
    var element_id = mySwiper.activeSlide
    
    var elem = new Object();
    elem.id = element_id
    elem.title = $('#elem_title' + element_id).text()
    
    //Check if element isn't in array
    var trobat = false;
    
    for(var i = 0;i<actual_array.length;i++){
      if(actual_array[i].id == elem.id){
        alert("No se puede añadir dos veces el mismo elemento");
        trobat = true;
        break;
      } 
    }
    
    if(!trobat){
      actual_array[actual_array.length] = elem;
      actual_remain--;
      fillRemain();
    }

  });
  
  $('#finish_elem').click(function(){
    
    if(actual_array.length == 0){
      alert("Necesitas añadir como mínimo un elemento")
    }
    else{
          
      //Reload page with licores data
      
      if (actual_product == "zumo"){
        actual_product = "licor"
        actual_array = selected_data.licor;
        actual_remain = remain_licores; 
        $('#title').html("LICORES")
      } 
      else if(actual_product == "licor"){
        actual_product = "carbonico";
        actual_array = selected_data.carbonico;
        actual_remain = remain_carbonico; 
        $('#title').html("CARBONICOS")
      }
      else if(actual_product == "carbonico"){
        actual_product = "vaso";
        actual_array = selected_data.vaso;
        actual_remain = remain_vasos;
        $('#title').html("VASOS");
      }
      else{
        actual_product = "nombre"
        actual_remain = remain_nombre;
        $('#title').html("NOMBRE");
      }
      
      if(actual_product != "nombre"){
        $('.swiper-container').html("");
        $('.swiper-container').html('<div class="swiper-wrapper"></div>');
        addData2Page();
        fillRemain();
      }
      else{
        $('.swiper-container').html('<input type="text" onKeyPress="return taLimit(this)" onKeyUp="return taCount(this,\'myCounter\')" id="cocktail_name"/>' + 
          'Te quedan <B><SPAN id=myCounter>20</SPAN></B> caracteres para el nombre</font>');
        $('#swiper-pagination').remove();
        $('#remain_elem').remove();
        $('#add_elem').remove();
        $('#finish_elem').hide();
        $('#buttons').append('<input type="button" id="finish_cocktail" value="¡Mezclar!" onclick="finishCocktail()" />')
        createObject();
      }
    }
  });
    
});

function addData2Page(){
  $.ajax({
    type: "GET",
    url: "../data/" + actual_product + ".xml",
    dataType: "xml",
    success: xmlParser
  });
}
 
function xmlParser(xml) {
  $('#load').fadeOut(); //Hide the loader gif
  
  $(xml).find(actual_product).each(function(){
    var wrapper = $('.swiper-wrapper');
    wrapper.append(
      '<div class="swiper-slide" id="' + actual_product + $(this).attr("id") + '">' + 
        '<div id="elem_title' + $(this).attr("id") + '">' + 
          $(this).find("title").text() +  
        '</div>' + 
        '<div id="elem_image' + $(this).attr("id") + '">' + 
          '<img src="../images/' + actual_product + '/' + $(this).find("image").text() + '" class="cocktail_slide_image">' + 
        '</div>' + 
      '</div>'
    );
  });
  
  //Swiper Scroller
  
  mySwiper = $('.swiper-container').swiper( {  
    pagination : '.pagination1',
    loop:true
  });
}

function fillRemain(){
  if(actual_remain > 0){
    $('#remain_elem').html("Puedes añadir " + actual_remain + " elementos más");
    $('#add_elem').removeAttr("disabled");
  } 
  else{
    $('#add_elem').attr("disabled","true");
    $('#remain_elem').html("No puedes añadir más elementos.</br>Pulsa en Finalizar sección para continuar con la creación de tu coaktail");
  } 
}


function taLimit(taObj) {
  if (taObj.value.length==remain_nombre) return false;
  return true;
}

function taCount(taObj,Cnt) { 
  objCnt=createObject(Cnt);
  objVal=taObj.value;
  if (objVal.length>remain_nombre) objVal=objVal.substring(0,remain_nombre);
  if (objCnt) {
    objCnt.innerText=remain_nombre-objVal.length;
  }
  return true;
}
function createObject(objId) {
  if (document.getElementById) return document.getElementById(objId);
  else if (document.layers) return eval("document." + objId);
  else if (document.all) return eval("document.all." + objId);
  else return eval("document." + objId);
}

function finishCocktail(){
  
  alert("Mezclar!!!");
  selected_data.nombre = $('#cocktail_name').val();
  
  var json = JSON.stringify(selected_data);
  alert(json);
  
  //Fadeout other elements
  
  loadPage('makeCocktail_final.html', [json]);
  
}

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
