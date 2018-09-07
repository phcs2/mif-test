angular.
  module('main').
  component('newBooks', {
    template: require('./book-shelf.template.html'),
    controller: ['$http', '$window', '$timeout', function newBooksController($http, $window, $timeout) {
      var self = this;
      self.class = 'm-new';
      self.name = 'Новинки';
      self.coversSize = '0_50';

      $http.get('./data/new-books.json').then(function(response) {
        self.books = response.data;
        $timeout(function(){
          $window.myLazyLoad.update();
          angular.element(document.querySelector('.sk__new-books')).remove();
          angular.element(document.querySelector('.m-new')).removeClass('ng-hide');
        }, 100);
      });
    }]
  });
