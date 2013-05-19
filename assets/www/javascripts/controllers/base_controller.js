//Base Controller

var BROWSER = false;

var server_url = "http://sinatracockteleria.herokuapp.com"
var cocktails_route = "/cocktails"
var ingredients_route = "/ingredients/tipo"
var images_ingredients_route = "/images/ingredients"

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  document.addEventListener("backbutton", function(e) {
    //Configurem el boto "enrere" per a que, si estem a la pantalla principal, surti de l'aplicacio
    var full_url = window.location.pathname;
    var pag = full_url.substring(full_url.lastIndexOf('/'), full_url.length);
    if (pag == '/index.html') {

      var menuDiv = document.getElementById("optionsmenu");

      if (menuDiv.style.display == 'block') {
        menuDiv.style.display = 'none';
      } else {
        e.preventDefault();
        navigator.notification.confirm("¿Estás seguro que quieres salir?", exitApp, "Salir de la aplicación", 'SI, NO')
      }
    } else if (pag == '/makeCocktail.html') {
      e.preventDefault();
      navigator.notification.confirm("¿Estás seguro de querer descartar el cocktail?", discartCocktail, "Descartar cocktail", 'SI, NO')
    } else if (pag == '/makeCocktail_final.html') {
      e.preventDefault();
      navigator.notification.confirm("¿Estás seguro de querer descartar el cocktail?", discartCocktail2, "Descartar cocktail", 'SI, NO')
    } else {
      navigator.app.backHistory();
    }
  }, false);
  
  //Options menu

  var onSettings = function() {
    loadPage('options.html');
  };

  var onCredits = function() {
    alert("credits");
  };

  var optionsmenu = new OptionsMenu({
    id : "optionsmenu",
    items : [[{
      label : "Opciones",
      image : "../images/ic_options.png",
      action : onSettings
    }, {
      label : "Créditos",
      image : "../images/ic_credits.png",
      action : onCredits
    }]]
  });
}

function exitApp(button) {
  if (button == 1) {
    navigator.app.exitApp();
  }
}

function discartCocktail(button) {
  if (button == 1) {
    navigator.app.backHistory();
  }
}

function discartCocktail2(button) {
  if (button == 1) {
    history.go(-2);
    //Return to makeCocktail_intro
  }
}

/**
 * Load a new URL (using location), this change to actual html file to the new html from url
 * @param {Object} url URL of page to load
 * @param {Object} data Optional data Hash with params to add in URL
 */
function loadPage(url, data) {
  if (data == undefined)
    data = {};

  var params = '?';
  jQuery.each(data, function(index, value) {// in hash index is key and value is value
    params += (index + "=" + value + '&');
  });

  location = url + params;
}

function getURLParameter(name) {
  return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

function sendEmail(receiver, subject, body) {
  var extras = {};
  extras[WebIntent.EXTRA_EMAIL] = receiver;
  extras[WebIntent.EXTRA_SUBJECT] = subject;
  extras[WebIntent.EXTRA_TEXT] = body;

  window.plugins.webintent.startActivity({
    action : WebIntent.ACTION_SEND,
    type : 'message/rfc822',
    extras : extras
  }, function() {
  }, function() {
    alert('Failed to send email via Android Intent');
  });
}

/**
 * Obtenir els parametres GET passats per la URL i retorna el JSON corresponent.
 *
 * @author  jclara
 * @version 1.0
 * @date    2013-04-15
 */
function getUrlParameters() {
  var query = window.location.search.replace('?', '');
  if (query.charAt(query.length - 1) == '&') {//La funcio loadPage() posa un '&' al final de tot a vegades.
    query = query.substring(0, query.length - 1);
  }
  var json_string = '{"' + decodeURI(query.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}';
  return JSON.parse(json_string);
}
