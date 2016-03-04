(function() {
  'use strict';

  angular
    .module('testGrowth')
    .controller('CarController', CarController);

  /** @ngInject */
  function CarController($timeout, carsApi, $stateParams, $state){
    var vm = this;
    if(angular.isObject($stateParams.car)){
      vm.car = $stateParams.car;
    }else{
      $state.go('cars');
    }

  }
})();
