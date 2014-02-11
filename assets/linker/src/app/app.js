angular.module( 'sailng', [
	'ui.router',
	'ngSails',
	'angularMoment',
	'templates-dev',

	'sailng.home',
	'sailng.about',
	'sailng.messages'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
	$urlRouterProvider.otherwise( '/home' );
	$locationProvider.html5Mode(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
	console.log('app ctrl');
});