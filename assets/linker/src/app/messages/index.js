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

.controller( 'MessagesCtrl', function MessagesController( $scope, $sails, lodash, utils, config, MessageModel ) {
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
		MessageModel.delete(message).then(function(model) {
			// message has been deleted, and removed from $scope.messages
		});
	};

	$scope.createMessage = function(newMessage) {
		MessageModel.create(newMessage).then(function(model) {
			$scope.newMessage = {};
			console.log(model);
		});
	};

	MessageModel.getAll($scope).then(function(models) {
		$scope.messages = models;
	});
});