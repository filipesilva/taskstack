(function() {
  'use strict';

  angular.module('taskstack', []);

  angular.module('taskstack')
    .controller('Main', Main);

  Main.$inject = [];

  function Main() {
    var vm = this;
    vm.message = 'hello world';
  }

})();