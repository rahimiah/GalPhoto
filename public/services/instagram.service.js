angular.module('galPhoto')

.factory('instagram', function($resource){
    return  {
        fetchPopular: function(callback){
          var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
            client_id: 'b0fecfd6581041489232d2298f12ebeb'
          }, {
            fetch:{method:'JSONP'}
          });

          api.fetch(function(response){
            callback(response.data);
          });
        }
    }
})

