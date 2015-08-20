/**
 * User: Anderlu
 * Date: 14/11/19
 * Time: 上午10:26
 */
routeApp.controller('RouteListCtl',function($scope) {
    $scope.pageClass = 'page-list';
});
routeApp.controller('RouteDetailCtl',function($scope, $routeParams) {
    $scope.pageClass = 'page-home';
});

routeApp.controller('RoutePhotosCtl',function($scope, $routeParams) {
    $scope.pageClass = 'page-contact';
});

routeApp.controller('RouteVideosCtl',function($scope, $routeParams) {
    $scope.pageClass = 'page-about';
});