'use strict';

angular.
  module('main').
  component('headerBlocks', {
    template: require('./header-blocks.template.html'),
    controller: ['$http', '$window', '$timeout', function headerController($http, $window, $timeout) {
      var self = this;
      $http.get('./data/header.json').then(function(response) {
        self.header = response.data;
        self.wishlistBooks = self.header.wishlist.books || [];
        self.discount = self.header.wishlist.discount;
        self.cartBooks = self.header.cart.books || [];
        self.sum = self.header.cart.sum;
        self.city = self.header.delivery.city || 'Москва';
        self.daysFrom = self.header.delivery.daysFrom || 3;
        self.daysTo = self.header.delivery.daysTo || 4;
        $timeout(function(){
          $window.myLazyLoad.update();
          angular.element(document.querySelector('.sk__header')).remove();
          angular.element(document.querySelector('.c-header')).removeClass('ng-hide');
        }, 100);
      });
    }]
  });
