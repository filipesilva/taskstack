(function() {
  'use strict';

  angular.module('taskstack', ['ngAnimate']);

  angular.module('taskstack')
    .controller('Main', Main);

  Main.$inject = ['$window'];

  function Main($window) {
    var vm = this;
    activate();

    function activate() {
      vm.stack = [];
      vm.newTask = '';
      vm.push = push;
      vm.pop = pop;
      vm.keypress = keypress;
      vm.about = false;
      vm.toggleAbout = toggleAbout;
      load();
    }

    function push() {
      if (vm.newTask) {
        vm.stack.push({
          name: vm.newTask
        });
        vm.newTask = '';
        save();
      }
    }

    function pop() {
      vm.stack.pop();
      save();
    }

    function keypress(event) {
      if (event.keyCode === 13) {
        vm.push();
      } else if (event.keyCode === 27) {
        vm.pop();
      }
    }

    function toggleAbout() {
      vm.about = !vm.about;
      save();
    }

    function save() {
      $window.localStorage.setItem('stack', angular.toJson(vm.stack));
    }

    function load() {
      if ($window.localStorage.getItem('stack')) {
        vm.stack = angular.fromJson($window.localStorage.getItem('stack'));
      }
    }
  }
})();