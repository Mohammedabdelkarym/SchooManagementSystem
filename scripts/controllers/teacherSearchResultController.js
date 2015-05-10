/**
 * Created by mohammedabdelkarym on 4/11/15.
 */
(function(){

    var teacherSearchResultController = function($routeParams, schoolNetworkApi, $log){
        var phoneNumber = $routeParams.phoneNumber;
        var userName = $routeParams.userName;
        var teachers = null;
        var __this = this;

        var init = function(){

            __this.sortBy =  "";
            __this.reverse =  "";

            schoolNetworkApi.searchTeachers(phoneNumber, userName)
                .success(function(teachers){
                    __this.teachers = teachers;
                 })
                .error(function(data, status, header, config){
                    $log.log("Error"+ data.error + ' ' + status);
                });
        };

        init();

        this.orderBy = function(property){
            __this.sortBy =  property;
            __this.reverse =  !__this.reverse;
        };
     };

    teacherSearchResultController.$inject = ['$routeParams', 'schoolNetworkApi', '$log'];

    angular.module("school").controller("teacherSearchResultController",teacherSearchResultController);

}());