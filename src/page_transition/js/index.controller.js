/**
 * User: Anderlu
 * Date: 14/11/19
 * Time: 上午10:26
 */
routeApp.controller('RouteListCtl',function($scope) {
});
routeApp.controller('RouteDetailCtl',function($scope, $routeParams) {
    console.log($routeParams);
    $scope.id = $routeParams.id;
});