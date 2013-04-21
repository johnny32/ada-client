/**
 * Objecte per a treballar amb Cocktails dins de JSON.
 * NOTA: No anira a la versio final (es crearan i tractaran directament al servidor)
 *  
 * @param {Object} zumo
 * @param {Object} licor
 * @param {Object} carbonico
 * @param {Object} vaso
 * @param {Object} nombre
 * @param {Object} color
 * @param {Object} creador
 * @param {Object} recomendado
 * 
 * @author  jclara
 * @version 2.0
 * @date    2013-04-05
 */
var Cocktail = function(id, zumos, licores, carbonico, vaso, nombre, color, creador, recomendado) {
  recomendado = recomendado || 0; //No existeix el concepte de "valor per defecte" d'un parametre en JavaScript...
  
  this.id           = id;
  this.zumos        = zumos;
  this.licores      = licores;
  this.carbonico    = carbonico;
  this.vaso         = vaso;
  this.nombre       = nombre;
  this.color        = color;
  this.creador      = creador;
  this.recomendado  = recomendado;
}
