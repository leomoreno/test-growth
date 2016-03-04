(function() {
  'use strict';

  describe('service carsApi', function() {
    var carsApi;

    beforeEach(module('testGrowth'));
    beforeEach(inject(function(_carsApi_) {
      carsApi = _carsApi_;
    }));

    it('should be registered', function() {
      expect(carsApi).not.toEqual(null);
    });

    // describe('getCars function', function() {
    //   it('should exist', function() {
    //     expect(carsApi.getCars).not.toEqual(null);
    //   });
    //
    //   it('should return array of object', function() {
    //     var data = carsApi.getCars();
    //     expect(data).toEqual(jasmine.any(Array));
    //     expect(data[0]).toEqual(jasmine.any(Object));
    //     expect(data.length > 5).toBeTruthy();
    //   });
    // });
  });
})();
