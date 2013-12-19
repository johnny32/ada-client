//Funcions per a treballar amb l'API de Google Maps

/**
 * Inicialitza el mapa i mostra un globus indicant la posicio de la cockteleria
 * 
 * @author  jclara
 * @version 1.1
 * @date    2013-03-07
 */
function initialize() {
  
  var data = JSON.parse(window.localStorage.getItem("list_Mapa"));
  
  var mapProp = {
    center: new google.maps.LatLng(40.396764305572056, -3.427734375), //Per a que es vegi be el globus, no centrem el mapa just a on esta la cockteleria, sino una mica mes amunt i a la dreta
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
  
  $.each(data, function(k,v){
    afegirGlobus(map, v.latitude, v.longitude, v.name, v.address);
  });
}

/**
 * Afegeix un globus al mapa a la posicio indicada i amb el titol corresponent.
 *  
 * @param   map        Mapa on s'afegeix el globus
 * @param   latitud    Latitud de la posicio del globus
 * @param   longitud   Longitud de la posicio del globus
 * @param   titol      Etiqueta que es posara al globus
 * @param   descripcio (Opcional) Mostra una descripcio al globus
 * 
 * @author  jclara
 * @version 1.0
 * @date    2013-03-23
 */
function afegirGlobus(mapa, latitud, longitud, titol, descripcio) {
  
  var contingutGlobus = '<div id="globus-gmap"><h1>' + titol + '</h1><br>' + descripcio + '</div>';
  
  var globusInfo = new google.maps.InfoWindow({
    content: contingutGlobus
  });
  
  var marcador = new google.maps.Marker({
    position: new google.maps.LatLng(latitud, longitud),
    map: mapa,
    title: titol
  });
  
  google.maps.event.addListener(marcador, 'click', function() {
    globusInfo.open(mapa, marcador);
  });
}
