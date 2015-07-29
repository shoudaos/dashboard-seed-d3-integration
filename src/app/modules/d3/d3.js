(function() {
  'use strict';

  angular.module('app.d3')
    .controller('D3Controller', D3Controller);

  D3Controller.$inject = ['$scope', '$http'];
  function D3Controller($scope, $http) {
    $scope.hello= 'Hello';
    $scope.vasia = [];
    $http.get('my.json').success(function (data) {
      $scope.vasia = data;
    })
  }
  angular.module('app.d3')
    .directive('d3Directive',[function(){
      return {
        restrict: 'EA',
        template: '<svg width="100%"></svg>',
        scope: {
          data: '='
        },
        link: function(scope){

          scope.$watch('data', function(newVal, oldVal) {
            d3.select('svg').selectAll('circle').data(scope.data).enter().append('circle')
              .attr('cx', function(d){return d})
              .attr('cy', 20)
              .attr('r', 10);
          })
        }
      }
    }])

})();
