app.factory('getData', ['$http', function($http) { 
  var getData = {};
  getData.getDataFromSource = function(selectSource){
      
  return $http.get('https://newsapi.org/v1/articles?source=' + selectSource +'&sortBy=top&apiKey=83df7a3878c146b1ae6072c8742192f2') 
            .then(function(response) { 
              return response.data; 
            }) 
            .catch(function(err) { 
              return err; 
            }); 
  }
  return getData;
}]);