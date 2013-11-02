function setLocales(){
  var idiom = getBrowserLocale();
  $('[data-i18n]').each( function(index, element){
    var fieldID = $(element).attr('data-i18n');
    var text = (fieldID == undefined)? '' : i18n[fieldID][idiom];
    $(element).html(text);
  });
}

function getI18n(fieldID){
  var idiom = getBrowserLocale();
  return i18n[fieldID][idiom];
}

function getBrowserLocale(){
  var idiom = navigator.language.split('-')[0]

  // check for default
  if( idiom != 'ca' && idiom != 'es' && idiom != 'en' )
    return 'en';
  
  return idiom;
}

i18n = {
  /********************** SPLASH *********************/
  initializing_app:{
    'en' : 'Initializing app',
    'es' : 'Iniciando aplicación',
    'ca' : 'Iniciant aplicació'
  },
  /********************** INDEX *********************/
  who_we_are:{
    'en' : 'Who we are',
    'es' : 'Quienes somos',
    'ca' : 'Qui som'
  },
  where_we_are:{
    'en' : 'Where we are',
    'es' : 'Donde estamos',
    'ca' : 'A on estem'
  },
  create_your_cocktail:{
    'en' : 'Create your own<br>cocktail',
    'es' : 'Crea tu propio<br>cocktail',
    'ca' : 'Crea el teu propi<br>cocktail'
  },
  the_best:{
    'en' : 'The best',
    'es' : 'Los mejores',
    'ca' : 'Els millors'
  },
  /********************** WHO WE ARE *********************/
  who_we_are1:{
    'en' : 'We are a company dedicated to training in all aspects of the liquor.',
    'es' : 'Somos una empresa dedicada a la formación en todos los aspectos de la licorería.',
    'ca' : 'Som una empresa dedicada a la formació en tots els aspectes de la licoreria.',
  },
  who_we_are2:{
    'en' : 'Cocktails, mixology, bar management, service protocol and more.',
    'es' : 'Coctelería, mixología, administración de barras, protocolo de servicio y más.',
    'ca' : 'Cocteleria, mixologia, administració de barres, protocol de servei i més.'
  },
  who_we_are3:{
    'en' : 'We also make cocktails events around the country.',
    'es' : 'Realizamos también eventos de coctelería por todo el territorio nacional.',
    'ca' : 'Realitzem també events de cocteleria per tot el territori nacional.'
  },
  image_gallery:{
    'en' : 'Image gallery',
    'es' : 'Galería de imágenes',
    'ca' : 'Galeria d\'imatges'
  },
  /********************** WHERE WE ARE *********************/
  we_can_look_us:{
    'en' : 'Find us on',
    'es' : 'Nos puedes encontrar en',
    'ca' : 'Ens pots trobar a'
  },
  /********************** MAKE COCKTAIL *********************/
  make_cocktail1:{
    'en' : 'Now you can create your own cocktail!',
    'es' : 'Ahora podrás crear tu propio coctail!',
    'ca' : 'Ara podràs crear el teu propi coctail!'
  },
  make_cocktail2:{
    'en' : 'All you need to do is choose the ingredients, an original name, and mix it.',
    'es' : 'Lo único que debes hacer es escoger bien los ingredientes, darle un nombre bien original y mezclarlo todo.',
    'ca' : 'L\'únic que has de fer es escollir bé els ingredients, donar-li un nom ben original i barrejar-ho tot,'
  },
  make_cocktail3:{
    'en' : 'Also, if you\'re in a Sinatra local, they can mix it before you and you can taste it on site.',
    'es' : 'Además, si estás en el algun local Sinatra, te lo podrán preparar frente a ti y podrás degustarlo allí mismo.',
    'ca' : 'A més a més, si et trobes en algun local Sinatra, t\'ho podran preparar davant teu i podràs degustar-lo allà mateix.'
  },
  make_cocktail:{
    'en' : 'Make cocktail',
    'es' : 'Crear coctail',
    'ca' : 'Crear coctail'
  },
  my_other_cocktails:{
    'en' : 'My other cocktails',
    'es' : 'Mis otros coctails',
    'ca' : 'Els meus altres coctails'
  },
  Zumo:{
    'en' : 'JUICES',
    'es' : 'ZUMOS',
    'ca' : 'SUCS'
  },
  Licor:{
    'en' : 'LIQUOR',
    'es' : 'LICORES',
    'ca' : 'LICORS'
  },
  Carbonico:{
    'en' : 'CARBONICS',
    'es' : 'CARBÓNICOS',
    'ca' : 'CARBÒNICS'
  },
  Vaso:{
    'en' : 'CUPS',
    'es' : 'VASOS',
    'ca' : 'GOTS'
  },
  Creador:{
    'en' : 'CREATOR',
    'es' : 'CREADOR',
    'ca' : 'CREADOR'
  },
  nombre:{
    'en' : 'NAME',
    'es' : 'NOMBRE',
    'ca' : 'NOM'
  },
  remain1:{
    'en' : 'You have',
    'es' : 'Te quedan',
    'ca' : 'Et queden'
  },
  remain2:{
    'en' : 'characters left',
    'es' : 'carácteres para el nombre',
    'ca' : 'caràcters per al nom'
  },
  mezclar:{
    'en' : 'Mix',
    'es' : 'Mezclar',
    'ca' : 'Barrejar'
  },
  puedes_añadir:{
    'en' : 'You can add',
    'es' : 'Puedes añadir',
    'ca' : 'Pots afegir'
  },
  elementos_mas:{
    'en' : 'elements more',
    'es' : 'elementos más',
    'ca' : 'elements més'
  },
  no_mas_elementos:{
    'en' : 'You can\'t add more elements.</br>Click on Finish section to continue with cocktail creation',
    'es' : 'No puedes añadir más elementos.</br>Pulsa en Finalizar sección para continuar con la creación de tu coctail',
    'ca' : 'No pots afegir més elements.</br>Clica en Finalitzar secció per a continuar amb la creació del teu coctail'
  },
  no_mas_elementos_small:{
    'en' : 'You can\'t add more elements.',
    'es' : 'No puedes añadir más elementos.',
    'ca' : 'No pots afegir més elements.'
  },
  elementos_maximos:{
    'en' : 'Max elements',
    'es' : 'Elementos máximos',
    'ca' : 'Elements màxims'
  },
  no_dos_veces:{
    'en' : 'Can\'t add element twice',
    'es' : 'No se puede añadir dos veces el mismo elemento',
    'ca' : 'No es pot afegir dues vegades el mateix element',
  },
  no_dos_veces_title:{
    'en' : 'Repeated element',
    'es' : 'Elemento repetido',
    'ca' : 'Element repetit'
  },
  save_cocktail:{
    'en' : 'Save cocktail',
    'es' : 'Guardar coctail',
    'ca' : 'Guardar coctail'
  },
  /********************** ADD *********************/
  add:{
    'en' : 'Add',
    'es' : 'Añadir',
    'ca' : 'Afegir'
  },
  finish_section:{
    'en' : 'Finish section',
    'es' : 'Finalizar sección',
    'ca' : 'Finalitzar secció'
  },
  without_alcohol:{
    'en' : 'Without alcohol',
    'es' : 'Sin alcohol',
    'ca' : 'Sense alcohol'
  },
  a_punto_de_añadir:{
    'en' : 'You are about to add: ',
    'es' : 'Estás a punto de añadir: ',
    'ca' : 'Estàs a punt d\'afegir: '
  },
  /********************** COCKTAIL *********************/
  share:{
    'en' : 'Share',
    'es' : 'Compartir',
    'ca' : 'Compartir'
  },
  more_cocktails:{
    'en' : 'See more user cocktails',
    'es' : 'Ver más coctails del usuario',
    'ca' : 'Veure més coctails de l\'usuari'
  },
  rating_cocktail:{
    'en' : 'Rating cocktail:',
    'es' : 'Votar coctail:',
    'ca' : 'Votar coctail:'
  },
  ya_has_votado:{
    'en' : 'You have already voted for this cocktail',
    'es' : 'Ya has votado por este coctail',
    'ca' : 'Ja has votat per aquest coctail'
  },
  tu_puntuacion:{
    'en' : 'you scored',
    'es' : 'tu puntuación ha sido',
    'ca' : 'la teva puntuació ha sigut'
  },
  /********************** RATING *********************/
  rate_this_cocktail:{
    'en' : 'Rate this cocktail',
    'es' : 'Vota este coctail',
    'ca' : 'Vota aquest coctail'
  },
  rating_correctly:{
    'en' : 'Rated correctly',
    'es' : 'Votado correctamente',
    'ca' : 'Votat correctament'
  },
  /********************** COCKTAILS LIST *********************/
  cocktails_list:{
    'en' : 'Cocktails list of ',
    'es' : 'Listado de coctails de ',
    'ca' : 'Llistat de coctails de '
  },
  cocktails_list_generic:{
    'en' : 'Cocktails list',
    'es' : 'Listado de coctails',
    'ca' : 'Llistat de coctails'
  },
  recommended_cocktail:{
    'en' : 'Recommended cocktail',
    'es' : 'Coctail recomendado',
    'ca' : 'Coctail recomanat'
  },
};