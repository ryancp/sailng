angular.module( 'sailng', [
	'ui.router',
	'ngSails',
	'angularMoment',
	'lodash',
	'angularMoment',
	'ui.bootstrap',
	'templates-app',
	'services',
	'models',

	'sailng.header',
	'sailng.home',
	'sailng.about',
	'sailng.messages'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
	// $urlRouterProvider.otherwise( '/home' );
	$urlRouterProvider.otherwise(function ($injector, $location) {
		if ($location.$$url === '/') {
			window.location = '/home';
		}
		else {
			// pass through to let the web server handle this request
			window.location = $location.$$absUrl;
		}
	});
	$locationProvider.html5Mode(true);
})

.run( function run () {
	moment.lang('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
	config.currentUser = window.currentUser;
});