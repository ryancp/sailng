angular.module( 'sailng.register', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/index.tpl.html'
			}
		},
		data:{ pageTitle: 'Register' }
	});
})

.controller( 'RegisterCtrl', function RegisterController( $scope, config, UserModel ) {
	$scope.newUser = {};

	$scope.createUser = function(newUser) {
		UserModel.create(newUser).then(function(model) {
			config.currentUser = model;
			$scope.newUser = {};
			console.log(model);
			// TODO: client-side redirect to /messages
		});
	};
});