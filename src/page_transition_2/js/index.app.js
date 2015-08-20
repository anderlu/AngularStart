/**
 * User: Anderlu
 * Date: 14/11/19
 * Time: 上午10:26
 */
var routeApp = angular.module('routeApp',['ngRoute', 'ngAnimate']);

routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'route/list.html',
            controller: 'RouteListCtl'
        })
        .when('/photos', {
            templateUrl: 'route/photos.html',
            controller: 'RoutePhotosCtl'
        })
        .when('/videos', {
            templateUrl: 'route/videos.html',
            controller: 'RouteVideosCtl'
        })
        .when('/list/:id', {
            templateUrl: 'route/detail.html',
            controller: 'RouteDetailCtl'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);


// Initialize the main module
routeApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
    'use strict';
    $rootScope.go = function (path, pageAnimationClass) {

        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }

        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }

        else { // Go to the specified path
            $location.path(path);
        }
    };
}]);