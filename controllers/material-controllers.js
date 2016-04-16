angular.module("socialApp")

.controller('showEventsCtrl', function($scope, mongoFactory) {
	$scope.mongoStuff = {};
	mongoFactory.getMongoStuff()
	.then(function(events) {
		$scope.mongoStuff = events;
		console.log(events);
	}, function(error) {
		console.log(error);
	});
});

