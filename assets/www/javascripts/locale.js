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
    'en' : 'All you have to do is choose the ingredients, the original name it and mix well.',
    'es' : 'Lo único que debes hacer es escoger bien los ingredientes, darle un nombre bien original y mezclarlo todo.',
    'ca' : 'L\'únic que has de fer es escollir bé els ingredients, donar-li un nom ben original i barrejar-ho tot,'
  },
  make_cocktail3:{
    'en' : 'Also, if you\'re in the some Sinatra local, they can prepare the moment and you can taste your creation.',
    'es' : 'Además, si estás en el algun local Sinatra, te lo podrán preparar al momento y podrás degustar tu creación.',
    'ca' : 'A més a més, si et trobes en algun local Sinatra, t\'ho podran preparar al moment i podràs degustar la teva creació.'
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
};