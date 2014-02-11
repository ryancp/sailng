angular.module( 'sailng.about', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		},
		data:{ pageTitle: 'About' }
	});
})

.controller( 'AboutCtrl', function AboutController( $scope ) {
	
});