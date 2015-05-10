/**
 * Created by mohammedabdelkarym on 4/24/15.
 */
(function (){

    var studentsSearchResultController = function($routeParams, schoolNetworkApi, $log){
        var studentName = $routeParams.studentName;
        var studentClass = $routeParams.studentClass;
        var students = null;
        var __this = this;

        __this.sortBy = "";
        __this.reverse = "";

        var init= function(){


            schoolNetworkApi.searchStudents(studentName, studentClass)
                .success(function(students){
                    $log.log(students);
                    __this.students = students;
                })
                .error(function(data, status, header, config){
                    $log.log("Error"+ data.error+" "+status);
                });
        };

        init();

        this.orderBy = function(property){
            __this.sortBy = property;
            __this.reverse = ! __this.reverse;
        }
    };


    studentsSearchResultController.$inject = ['$routeParams', 'schoolNetworkApi', '$log'];
    angular.module("school").controller("studentsSearchResultController",studentsSearchResultController);

}());