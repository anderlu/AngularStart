/**
 * User: Anderlu
 * Date: 14/11/14
 * Time: 下午3:36
 */
angular.module('components')
    .directive('tabs', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $element) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length == 0) $scope.select(pane);
                    panes.push(pane);
                };
            },
//            template: '<div class="tabbable">' +
//                '<ul class="nav nav-tabs">' +
//                '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
//                '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
//                '</li>' +
//                '</ul>' +
//                '<div class="tab-content" ng-transclude></div>' +
//                '</div>',

            templateUrl : 'js/tmpl/tabs.html',
            replace: true
        };
    });