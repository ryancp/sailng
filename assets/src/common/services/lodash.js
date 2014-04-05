var lodash = angular.module('lodash', []);
lodash.factory('lodash', function() {
	return window._; // assumes lodash has already been loaded on the page
});