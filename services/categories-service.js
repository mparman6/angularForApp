angular.module("socialApp")

.factory('mongoFactory', function($q, $http) {
	return {
		getMongoStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/events');

		httpPromise.success(function(events) {
			deferred.resolve(events);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});