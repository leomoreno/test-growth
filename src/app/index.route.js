(function() {
  'use strict';

  angular
    .module('testGrowth')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('compare', {
        url: '/compare',
        templateUrl: 'app/compare/compare.html',
        controller: 'CompareController',
        controllerAs: 'compare'
      }).state('cars', {
        url: '/cars',
        templateUrl: 'app/cars/cars.html',
        controller: 'CarsController',
        controllerAs: 'cars'
      }).state('details', {
        url: '/cars/:carId',
        params: { car: null },
        templateUrl: 'app/car/car.html',
        controller: 'CarController',
        controllerAs: 'car'
      });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }

})();
