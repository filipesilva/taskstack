angular.module('taskstack', ['ngRoute', 'ngAnimate'])

config = ($routeProvider) ->
  $routeProvider
    .when('/', {
      templateUrl: 'stack.html'
      controller: 'Main'
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'about.html'
    })
    .otherwise({
      redirectTo: '/'
    });

config.$inject = ['$routeProvider']

angular.module('taskstack').config(config)

class Main
  @$inject = ['$window']
  stack = []
  newTask = ''

  constructor: (@$window) ->
    @load()

  push: ->
    if @newTask
      @stack.push({name: @newTask})
      @newTask = ''
      @save()

  pop: ->
    @stack.pop()
    @save()

  keypress: (event) ->
    if event.keyCode == 13
      @push()
    else if event.keyCode == 27
      @pop()

  load: ->
    if @$window.localStorage.getItem('stack')
      @stack = angular.fromJson(@$window.localStorage.getItem('stack'))

  save: ->
    @$window.localStorage.setItem('stack', angular.toJson(@stack))

angular.module('taskstack').controller('Main', Main)
