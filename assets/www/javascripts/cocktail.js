/**
 * Objecte per a treballar amb Cocktails dins de JSON.
 *  
 * @param {Object} id
 * @param {Object} nom
 * @param {Object} usuari
 * @param {Object} ingredients
 * @param {Object} valoracio
 * 
 * @author  jclara
 * @version 1.0
 * @date    2013-04-05
 */
var Cocktail = function(id, nom, usuari, ingredients, valoracio) {
  this.id           = id;
  this.nom          = nom;
  this.usuari       = usuari;
  this.ingredients  = ingredients;
  this.valoracio    = valoracio;
}
