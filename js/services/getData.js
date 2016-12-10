app.factory('getData', ['$http', function($http) { 
  return $http.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=83df7a3878c146b1ae6072c8742192f2') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);