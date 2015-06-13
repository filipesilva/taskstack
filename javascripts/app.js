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
      vm.newTask = '';
      vm.push = push;
      vm.pop = pop;
      vm.keypress = keypress;
    }

    function push() {
      if (vm.newTask) {
        vm.stack.push({
          name: vm.newTask
        });
        vm.newTask = '';
      }
    }

    function pop() {
      vm.stack.pop();
    }

    function keypress(event) {
      if (event.keyCode === 13) {
        vm.push();
      } else if (event.keyCode === 27) {
        vm.pop();
      }
    }
  }
})();