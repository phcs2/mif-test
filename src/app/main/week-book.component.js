angular.
  module('main').
  component('weekBook', {
    template: require('./week-book.template.html'),
    controller: ['$http', '$window', '$timeout', function weekBookController($http, $window, $timeout) {
      var self = this;

      $http.get('./data/week-book.json').then(function(response) {
        self.wbook = response.data;
        $timeout(function(){
          $window.myLazyLoad.update();
          angular.element(document.querySelector('.sk__wbook')).remove();
          angular.element(document.querySelector('.c-book-of-week')).removeClass('ng-hide');
        }, 100);
      });
    }]
  });
