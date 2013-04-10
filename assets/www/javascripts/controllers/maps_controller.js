//Funcions per a treballar amb l'API de Google Maps

/**
 * Inicialitza el mapa i mostra un globus indicant la posicio de la cockteleria
 * 
 * @author  jclara
 * @version 1.1
 * @date    2013-03-07
 */
function initialize() {
  
  var latitud = 41.975434;
  var longitud = 2.823328;
  var titol = 'Sinatra Cockteleria';
  var descripcio = 'C/ Creu, 2-Bis, Desp. 3'
  
  var mapProp = {
    center: new google.maps.LatLng(latitud + 0.0012, longitud + 0.0011), //Per a que es vegi be el globus, no centrem el mapa just a on esta la cockteleria, sino una mica mes amunt i a la dreta
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
  
  afegirGlobus(map, latitud, longitud, titol, descripcio);
  
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
  
  globusInfo.open(mapa, marcador);
}
