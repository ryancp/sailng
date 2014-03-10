angular.module( 'sailng', [
	'ui.router',
	'ngSails',
	'angularMoment',
	'lodash',
	'services',
	'models',
	'angularMoment',
	'templates-dev',

	'sailng.home',
	'sailng.about',
	'sailng.messages',
	'sailng.register'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
	$urlRouterProvider.otherwise( '/home' );
	$locationProvider.html5Mode(true);
})

.run( function run () {
	moment.lang('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope ) {
});