app.controller('MainController', ['$scope', 'getData', function($scope, getData) {
  getData.success(function(data) {
    $scope.data = data;
  });
}]);
