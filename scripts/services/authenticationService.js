/**
 * Created by mohammedabdelkarym on 4/4/15.
 */

(function(){
    var AuthenticationService = function(schoolNetworkApi, $log, $location, UserService){
        var factory = {};
        factory.login = function(credentials){

            var email = credentials.email;
            var password = credentials.password;

            schoolNetworkApi.validateCredentials(email,password).success(function(message){
                if(message.code === '1'){
                    UserService.session.isLogged = true;
                    UserService.session.user = message;
                    $location.path('/home');
                }
            }).error(function(data, status, header, config){
                $log.log("Error"+ data.error + ' ' + status);
            });
        };
        factory.logout = function(){
            UserService.reset();
            $location.path('/login')
        }
        return factory;
    };

    AuthenticationService.$inject = ['schoolNetworkApi', '$log', '$location', 'UserService'];
    angular.module("school").factory("AuthenticationService",AuthenticationService);

}());