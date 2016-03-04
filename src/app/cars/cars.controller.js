(function() {
  'use strict';

  angular
    .module('testGrowth')
    .controller('CarsController', CarsController);

  /** @ngInject */
  function CarsController($timeout, carsApi, $state) {
    var vm = this;

    vm.cars = [];
    vm.showCarDetails = showCarDetails;

    activate();

    function activate() {
      getCarsApi();
    }

    function getCarsApi(){
        carsApi.getCars().then(function(cars){
          vm.cars = cars;
        });
    }

    function showCarDetails(car) {
      $state.go('details',{carId:encodeURIComponent(car.model),car:car});
    }
  }
})();
