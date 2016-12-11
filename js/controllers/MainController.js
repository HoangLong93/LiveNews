app.controller('MainController', ['$scope', 'getData','$interval', function($scope, getData, $interval) {
  $scope.sources = ['abc-news-au','bbc-news','bbc-sport','bloomberg','business-insider','cnn','daily-mail','espn','fox-sports','independent','national-geographic','the-new-york-times','the-washington-post','time'];
  $scope.selectSource = 'bbc-news';

  //Handle function change source
  $scope.changeSource = function(selectSource){
      getData.getDataFromSource(selectSource).success(function(data) {
        $scope.data = data;
      });
  }
  $scope.changeSource('bbc-news')
  
  // $scope.intervalFunction = function(){
  //   $interval(function() {
      
      
  //   }, 10000)
  // };
  
  // // Kick off the interval
  // $scope.intervalFunction();
}]);
