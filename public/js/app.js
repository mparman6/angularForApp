angular.module("socialApp", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('events', {
    url: '/home',
    templateUrl: 'public/views/home.html',
    controller: 'showEventsCtrl'
  })
  
	  $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});

