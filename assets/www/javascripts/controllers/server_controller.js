var BROWSER = true;

if (BROWSER) {
  var url = "http://localhost:3000";
} else {
  var url = "http://10.0.2.2:3000";
}

function getCocktails(params) {
  var json = [];
  if (params.type == "best") {
    /*$.ajax({
      type: "GET",
      url: url + "/cocktails",
      dataType: 'jsonp',
      success: function(data) {
        json = data;
        alert('Yeeeeeeaaaaaah!!!');
      },
      error: function(data) {
        alert('Booooo!');
      }
    });*/
   $.getJSON(url + "/cocktails", function(data) {
     alert(data);
   });
  } else if (params.type == "user") {
    $.ajax({
      type : "GET",
      url : server_url + cocktails_route + "/user/" + params.id,
      dataType : "json",
      success : function(data){
        alert("Success!: " + data);
        return data;
      },
      error: function(header, status, from){
        alert("Error con el servidor");
      }
    });
  }
  return json;
}
