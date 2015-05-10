(function(){

    //This is facade api to hide the complexity of consuming the webserive and network communication

    var schoolNetworkApi = function($http) {
        var host = "http://localhost:8080/";

        this.validateCredentials = function(email, password){
            return $http.post(host+"validate",{email:email, password: password});
        };

        this.searchTeachers = function(phoneNumber, name){
            console.log(encodeURI(host+"searchTeachers/"+phoneNumber+"/"+name+""));
            return $http.get(encodeURI(host+"searchTeachers/"+phoneNumber+"/"+name+""));
        };

        this.searchStudents = function(studentName, studentClass){
          return $http.get(encodeURI(host+"searchStudents/"+studentName+"/"+studentClass+""));
        };
    };

    schoolNetworkApi.$inject = ['$http'];
    angular.module('school').service('schoolNetworkApi', schoolNetworkApi);
}());