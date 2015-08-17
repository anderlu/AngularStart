/**
 * User: Anderlu
 * Date: 14/11/14
 * Time: 下午3:36
 */
angular.module('components')
    .directive('pane', function () {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            scope: { title: '@' },
            link: function (scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
                '</div>',
            replace: true
        };
    });