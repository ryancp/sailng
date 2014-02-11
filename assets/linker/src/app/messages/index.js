angular.module( 'sailng.messages', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'messages', {
		url: '/messages',
		views: {
			"main": {
				controller: 'MessagesCtrl',
				templateUrl: 'messages/index.tpl.html'
			}
		},
		data:{ pageTitle: 'Messages' }
	});
})

.controller( 'MessagesCtrl', function MessagesController( $scope, $sails ) {
	var config = {
		apiUrl: '/api'
	};

	$scope.newMessage = {};

	$scope.messages = [];

	$sails.on('message', function (envelope) {
		switch(envelope.verb) {
			case 'created':
				$scope.messages.unshift(envelope.data);
				break;
			case 'destroyed':
				lodash.remove($scope.messages, {id: envelope.id});
				break;
		}
	});

	$scope.destroyMessage = function(message) {
		$sails.delete(config.apiUrl + '/message/' + message.id, function (data) {
			console.log(data);
		});
	};

	$scope.createMessage = function(message) {
		$sails.post(config.apiUrl + '/message', message, function (data) {
			$scope.newMessage = {};
			console.log(data);
		});
	};

	$sails.get(config.apiUrl + '/message', function(models) {
		$scope.messages = models;
	});
});