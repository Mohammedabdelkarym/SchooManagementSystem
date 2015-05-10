(function(){
    var appController = function(appSettings, $rootScope, UserService, $route, $routeParams, $location, $log){
        this.appSettings = appSettings;

        //$rootScope.$on('$routeChangeStart', function (event, next) {
        //    var userAuthenticated = UserService.session.isLogged; /* Check if the user is logged in */
        //
        //    if (!userAuthenticated && !next.allowAnonymous) {
        //        /* You can save the user's location to take him back to the same page after he has logged-in */
        //        //$rootScope.savedLocation = $location.url();
        //        $location.path('/');
        //    }
        //});
        //
        //$rootScope.$on('$routeChangeStart', function (event, next) {
        //    var userAuthenticated = UserService.session.isLogged; /* Check if the user is logged in */
        //
        //    if (!userAuthenticated && !next.allowAnonymous) {
        //        /* You can save the user's location to take him back to the same page after he has logged-in */
        //        //$rootScope.savedLocation = $location.url();
        //        $location.path('/');
        //    }
        //});
    };

    appController.$inject = ['appSettings', '$rootScope', 'UserService', '$route', '$routeParams', '$location', '$rootScope', '$log'];

    angular.module("school").controller('appController',appController);
}());