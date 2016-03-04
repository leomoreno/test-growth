(function() {
  'use strict';

  angular
    .module('testGrowth')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
  }
})();
