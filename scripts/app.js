var school = angular.module("school",['ngRoute']);

school.config(function($routeProvider){

    $routeProvider
        .when('/',{
            controller:'loginController as loginCtr',
            templateUrl:'templates/login.html',
            access : {allowAnonymous : true}
        }).when('/home',{
            controller:'homeController as homeCtr',
            templateUrl:'templates/home.html',
            access : {allowAnonymous : false}
        }).when('/searchTeacher/phoneNumber/:phoneNumber/name/:userName',{
            controller:'teacherSearchResultController as tsrCtr',
            templateUrl:'templates/teachersearchresult.html',
            access : {allowAnonymous : false}
        }).when('/searchStudent/studentName/:studentName/studentClass/:studentClass',{
            controller:'studentsSearchResultController as stuCtr',
            templateUrl:'templates/studentsSearchResult.html',
            access : {allowAnonymous : false}
        });
 });


school.run(['$rootScope', function($rootScope){
    $rootScope.test = 123;
}]);