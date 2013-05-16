//////////////////////////
//
// News Feed
// See the "News Feed" section on https://developers.facebook.com/mobile
//
//////////////////////////

//Publish a story to the user's own wall
function publishStory(nombre_cocktail, id, image) {
  FB.ui({
    method: 'feed',
    name: 'He creado el cocktail ' + nombre_cocktail,
    caption: 'Aplicación Android de Sinatra Cockteleria',
    description: 'He creado el cocktail ' + nombre_cocktail + ' gracias a la aplicación de Sinatra Cockteleria. ¡Descárgate la aplicación y crea tu también uno!',
    link: server_url + "/" + id,
    picture: server_url + image,
    actions: [{ name: 'Descárgate la app', link: 'http://sinatracockteleria.herokuapp.com/' }],
  }, 
  function(response) {
    console.log('publishStory UI response: ', response);
  });
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