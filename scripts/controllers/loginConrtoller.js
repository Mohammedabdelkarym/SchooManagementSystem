(function(){
    var loginController = function(AuthenticationService){
        //this.credentials = {email : "mo@me.com", password : "mo"};


        this.credentials={email:"", password: ""};

        this.login = function(){
            AuthenticationService.login(this.credentials);
        };

        this.logout = function(){
            AuthenticationService.logout();
        };
    };

    loginController.$inject = ['AuthenticationService'];

    angular.module("school").controller('loginController',loginController);
}());