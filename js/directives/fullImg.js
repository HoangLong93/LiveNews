app.directive('lightboxDirective', function() {
  return {
    restrict: 'E', // applied on 'element'
    transclude: true, // re-use the inner HTML of the directive
    template: '<section ng-transclude></section>', 
  }
})