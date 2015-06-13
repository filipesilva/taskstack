(function() {
  'use strict';

  angular.module('taskstack', []);

  angular.module('taskstack')
    .controller('Main', Main);

  Main.$inject = [];

  function Main() {
    var vm = this;
    activate();

    function activate() {
      vm.stack = [];
      vm.push = push;
      vm.pop = pop;
    }

    function push(task) {
      vm.stack.push(task);
    }

    function pop() {
      vm.stack.pop();
    }
  }
})();