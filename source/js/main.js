var order = require('./ng/order');
var smoothScroll = require('smooth-scroll');


var a4x = window.a4x || {};
window.a4x = a4x;


a4x.main = function() {
  initNg();
  initSmoothScroll();
};


function initSmoothScroll() {
  var offset = 0;
  smoothScroll.init({
    'offset': offset,
    'updateURL': false
  });
}


function initNg() {
  angular.module('a4x', [])
      .controller('OrderController', order.OrderController)
      .config(['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
      }]);
  angular.bootstrap(document, ['a4x']);
}
