var Main, config;

angular.module('taskstack', ['ngRoute', 'ngAnimate']);

config = function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'stack.html',
    controller: 'Main',
    controllerAs: 'main'
  }).when('/about', {
    templateUrl: 'about.html'
  }).otherwise({
    redirectTo: '/'
  });
};

config.$inject = ['$routeProvider'];

angular.module('taskstack').config(config);

Main = (function() {
  Main.$inject = ['$window'];

  function Main($window) {
    this.$window = $window;
    this.stack = [];
    this.newTask = '';
    this.load();
  }

  Main.prototype.push = function() {
    if (this.newTask) {
      this.stack.push({
        name: this.newTask
      });
      this.newTask = '';
      return this.save();
    }
  };

  Main.prototype.pop = function() {
    this.stack.pop();
    return this.save();
  };

  Main.prototype.keypress = function(event) {
    if (event.keyCode === 13) {
      return this.push();
    } else if (event.keyCode === 27) {
      return this.pop();
    }
  };

  Main.prototype.load = function() {
    if (this.$window.localStorage.getItem('stack')) {
      return this.stack = angular.fromJson(this.$window.localStorage.getItem('stack'));
    }
  };

  Main.prototype.save = function() {
    return this.$window.localStorage.setItem('stack', angular.toJson(this.stack));
  };

  return Main;

})();

angular.module('taskstack').controller('Main', Main);
