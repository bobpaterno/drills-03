/* global _ */
/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(getBoxOffice);
  }

  function getBoxOffice() {
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=q9dxvu9wxvafw6c9h7gabvv8&callback=?';
    $.getJSON(url, displayBoxOffice);
  }

  function displayBoxOffice(bo) {
    var movies = bo.movies;
    var imgurls = movies.map(function(x){return x.posters.thumbnail;});
    var titles = movies.map(function(x){return x.title;});
debugger;

    for(var i=0; i<titles.length; i++) {
      var divbox=$('<div class=\'box\'></div>');
      var divtitle = $('<div class=\'name\'>'+titles[i]+'</div>');
      var img = $('<div><img src=\''+imgurls[i]+'\'></div>');
      $(divbox).append(img);
      $(divbox).append(divtitle);
      $('#output').append(divbox);
    }

//    var img = '<div class=\'thumb\'><img></div>';
    // var img = imgurls.map(x=>'<img src='+x+'>');
    // img.forEach(function(x) {$(div1).append(x);})


    // movies.map(function(x){return x.title;})
    // movies.map(function(x){return x.title;}).forEach(function(x){$('#output').append(x);})
  }

})();
