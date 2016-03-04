(function() {
  'use strict';

  angular
    .module('testGrowth')
    .controller('CompareController', CompareController);

  /** @ngInject */
  function CompareController($timeout, carsApi) {
    var vm = this;

    vm.cars = [];
    vm.car1 = null;
    vm.car2 = null;

    activate();

    function activate() {
      getCarsApi();
    }

    function getCarsApi() {
        carsApi.getCars().then(function(cars){
          vm.cars = cars;
        });
    }

  }
})();
