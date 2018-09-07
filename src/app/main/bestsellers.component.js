angular.
  module('main').
  component('bestsellers', {
    template: require('./book-shelf.template.html'),
    controller: ['$http', '$window', '$timeout', function bestsellersController($http, $window, $timeout) {
      var self = this;
      self.class = 'm-bestsellers';
      self.name = 'Бестселлеры';
      self.coversSize = '0_75';

      $http.get('./data/bestsellers.json').then(function(response) {
        self.books = response.data;
        $timeout(function(){
          $window.myLazyLoad.update();
          angular.element(document.querySelector('.sk__bestsellers')).remove();
          angular.element(document.querySelector('.m-bestsellers')).removeClass('ng-hide');
        }, 100);
      });
    }]
  });
