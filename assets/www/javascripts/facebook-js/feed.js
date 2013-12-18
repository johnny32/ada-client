//////////////////////////
//
// News Feed
// See the "News Feed" section on https://developers.facebook.com/mobile
//
//////////////////////////

//Publish a story to the user's own wall
function publishStory(nombre_cocktail, id, image) {
  var locale = getBrowserLocale();
  if(locale == 'es'){
    FB.ui({
      method: 'feed',
      name: 'He creado el coctail ' + nombre_cocktail,
      caption: 'Aplicación Android de Sinatra Cockteleria',
      description: 'He creado el coctail ' + nombre_cocktail + ' gracias a la aplicación de Sinatra Cockteleria. ¡Descárgate la aplicación y crea tu también uno!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Descárgate la app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
  else if(locale == 'ca'){
   FB.ui({
      method: 'feed',
      name: 'He creat el coctail ' + nombre_cocktail,
      caption: 'Aplicació Android Sinatra Cockteleria',
      description: 'He creat el coctail ' + nombre_cocktail + ' gràcies a l\'aplicació de Sinatra Cockteleria. Descarrega\'t l\'aplicació i crea\'n un!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Descarrega l\'app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
  else{
    console.log("PUBLISH STORY EN ");
    console.log("Nombre cocktail: " + nombre_cocktail);
    console.log("id: " + id);
    console.log("image: http://192.241.145.147" + image);
    FB.ui({
      method: 'feed',
      name: 'I created the cocktail ' + nombre_cocktail,
      caption: 'Sinatra Cockteleria Android app',
      description: 'I created the cocktail ' + nombre_cocktail + ' through the application of Sinatra Cockteleria. Download the application and also make one!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Download app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
}

function lookCocktail(nombre_cocktail, id, image) {
  var locale = getBrowserLocale();
  if(locale == 'es'){
    FB.ui({
      method: 'feed',
      name: 'Mira este cocktail ' + nombre_cocktail,
      caption: 'Aplicación Android de Sinatra Cockteleria',
      description: 'Mira este cocktail ' + nombre_cocktail + ' gracias a la aplicación de Sinatra Cockteleria. ¡Descárgate la aplicación y crea tu también uno!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Descárgate la app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
  else if(locale == 'ca'){
   FB.ui({
      method: 'feed',
      name: 'Mira aquest coctail ' + nombre_cocktail,
      caption: 'Aplicació Android Sinatra Cockteleria',
      description: 'Mira aquest coctail ' + nombre_cocktail + ' gràcies a l\'aplicació de Sinatra Cockteleria. Descarrega\'t l\'aplicació i crea\'n un!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Descarrega l\'app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
  else{
    FB.ui({
      method: 'feed',
      name: 'Look this cocktail ' + nombre_cocktail,
      caption: 'Sinatra Cockteleria Android app',
      description: 'Look this cocktail ' + nombre_cocktail + ' through the application of Sinatra Cockteleria. Download the application and also make one!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Download app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
}

function ratingCocktail(nombre_cocktail, id, image) {
  var locale = getBrowserLocale();
  if(locale == 'es'){
    FB.ui({
      method: 'feed',
      name: 'He votado el coctail ' + nombre_cocktail,
      caption: 'Aplicación Android de Sinatra Cockteleria',
      description: 'He votado el coctail ' + nombre_cocktail + ' gracias a la aplicación de Sinatra Cockteleria. ¡Descárgate la aplicación y crea tu también uno!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Descárgate la app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
  else if(locale == 'ca'){
   FB.ui({
      method: 'feed',
      name: 'He votat el coctail ' + nombre_cocktail,
      caption: 'Aplicació Android Sinatra Cockteleria',
      description: 'He votat el coctail ' + nombre_cocktail + ' gràcies a l\'aplicació de Sinatra Cockteleria. Descarrega\'t l\'aplicació i crea\'n un!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Descarrega l\'app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
  else{
    FB.ui({
      method: 'feed',
      name: 'I rated the cocktail ' + nombre_cocktail,
      caption: 'Sinatra Cockteleria Android app',
      description: 'I rated the cocktail ' + nombre_cocktail + ' through the application of Sinatra Cockteleria. Download the application and also make one!',
      link: "http://192.241.145.147/cocktails/" + id,
      picture: "http://192.241.145.147" + image,
      actions: [{ name: 'Download app', link: 'https://play.google.com/store/apps/details?id=com.claramanrique.sinatracockteleria&hl=es_419' }],
    }, 
    function(response) {
      console.log('publishStory UI response: ', response);
    });
  }
}

//Publish a story to the user's friend's wall
function publishStoryFriend() {
  randNum = Math.floor ( Math.random() * friendIDs.length ); 

  var friendID = friendIDs[randNum];
  
  console.log('Opening a dialog for friendID: ', friendID);
  
  FB.ui({
    method: 'feed',
    to: friendID,
    name: 'I\'m using the Hackbook web app',
    caption: 'Hackbook for Mobile Web.',
    description: 'Check out Hackbook for Mobile Web to learn how you can make your web apps social using Facebook Platform.',
    link: 'http://apps.facebook.com/mobile-start/',
    picture: 'http://www.facebookmobileweb.com/hackbook/img/facebook_icon_large.png',
    actions: [{ name: 'Get Started', link: 'http://apps.facebook.com/mobile-start/' }],
    user_message_prompt: 'Tell your friends about building social web apps.'
  }, 
  function(response) {
    console.log('publishStoryFriend UI response: ', response);
  });
}