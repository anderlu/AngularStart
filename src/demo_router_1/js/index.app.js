/**
 * User: Anderlu
 * Date: 14/11/19
 * Time: 上午10:26
 */
var routeApp = angular.module('routeApp',['ngRoute']);

routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'route/list.html',
            controller: 'RouteListCtl'
        })
        .when('/photos', {
            templateUrl: 'route/photos.html'
        })
        .when('/videos', {
            templateUrl: 'route/videos.html'
        })
        .when('/list/:id', {
            templateUrl: 'route/detail.html',
            controller: 'RouteDetailCtl'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);
