angular.module( 'sailng.messages', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'messages', {
        url: '/messages',
        views: {
            "main": {
                controller: 'MessagesController',
                templateUrl: 'messages/index.tpl.html'
            }
        },
        resolve: {
            messages: function(MessageModel) {
                return MessageModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
    });
})

.controller( 'MessagesController', function MessagesController( $scope, $sailsSocket, lodash, config, titleService, MessageModel, messages ) {
    titleService.setTitle('Messages');
    $scope.newMessage = {};
    $scope.messages = messages;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('message', function (envelope) {
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
        // check here if this message belongs to the currentUser
        if (message.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.createMessage = function(newMessage) {
        newMessage.user = config.currentUser.id;
        MessageModel.create(newMessage).then(function(model) {
            $scope.newMessage = {};
        });
    };
});