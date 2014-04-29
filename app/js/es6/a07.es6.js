/* global _ */
/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(getBoxOffice);
  }

  function getBoxOffice() {
    var num = $('#num-movies').val();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit='+num+'&country=us&apikey=q9dxvu9wxvafw6c9h7gabvv8&callback=?';
    $.getJSON(url, displayBoxOffice);
  }

  function displayBoxOffice(bo) {
    var movies = bo.movies;
    var titles = movies.map(function(x){return x.title;});
    debugger;
  }

})();
