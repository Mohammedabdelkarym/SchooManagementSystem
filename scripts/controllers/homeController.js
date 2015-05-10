/**
 * Created by mohammedabdelkarym on 4/4/15.
 */

(function(){

    var homeController = function(UserService, appSettings, $route, $routeParams, $location, $rootScope, $log){
        console.log();
        this.user = UserService.session.user;

        this.teacherSearchKeywards = {phoneNumber : "cdf", teacherName : "Mohab Sandy"} ;
        this.studnetSearchKeywards = {class : "", studentName : "Eli Joshua"} ;

        this.searchTeachers = function(){
            var name = this.teacherSearchKeywards.teacherName;
            var phoneNumber = this.teacherSearchKeywards.phoneNumber;
            if(this.teacherSearchKeywards.phoneNumber.length == 0) phoneNumber = " ";
            if(this.teacherSearchKeywards.teacherName.length == 0) name = " ";
            $location.path("searchTeacher/phoneNumber/"+phoneNumber+"/name/"+name);
        };

        this.searchStudents = function(){
            var studentClass = this.studnetSearchKeywards.class;
            var studentName = this.studnetSearchKeywards.studentName;
            if(this.studnetSearchKeywards.class.length == 0) studentClass = " ";
            if( this.studnetSearchKeywards.studentName.length == 0) studentName = " ";
            $location.path("searchStudent/studentName/"+studentName+"/studentClass/"+studentClass);
        }


    };

    homeController.$inject = ['UserService', 'appSettings', '$route', '$routeParams', '$location', '$rootScope', '$log', '$scope'];

    angular.module("school").controller("homeController",homeController);
}());