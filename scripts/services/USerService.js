(function(){
    var UserService = function(){

        var session = {
            isLogged : false,
            user : null
        };

        var factory = {};

        factory.reset = function(){
            session.isLogged = false;
            session.user = null;
        };

        factory.session = session;

        return factory;
    }

    UserService.$inject = [];
    angular.module("school").factory("UserService",UserService);
}());