'use strict';

angular.module('components')
    .directive('slider', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/slider/template.html',
            controller: ['$scope', function($scope) {
                var vm = this;
 
                $scope.$on('kendoWidgetCreated', function(event, widget) {
                    widget.wrapper.attr('title', vm.title);
                });

                $scope.$on('windowResize', function() {
                    if (vm.widget) {
                        vm.widget.resize();
                    }
                });
             }],
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                id: '@',
                title: '@',
                widget: '=',
                model: '=',
                options: '=',
                events: '='
            }
        };
    });
