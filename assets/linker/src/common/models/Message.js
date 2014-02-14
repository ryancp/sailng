angular.module('models.message', ['lodash', 'services', 'ngSails',])

.service('MessageModel', function($q, lodash, utils, $sails) {
	this.getAll = function() {
		var deferred = $q.defer();
		var url = utils.prepareUrl('message');

		$sails.get(url, function(models) {
			return deferred.resolve(models);
		});

		return deferred.promise;
	};

	this.create = function(newModel) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('message');

		$sails.post(url, newModel, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};

	this.delete = function(model) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('message/' + model.id);

		$sails.delete(url, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};
});