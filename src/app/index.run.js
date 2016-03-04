(function() {
  'use strict';

  angular
    .module('testGrowth')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
