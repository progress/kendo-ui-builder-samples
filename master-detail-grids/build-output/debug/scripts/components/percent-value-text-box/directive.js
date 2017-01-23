'use strict';

angular.module('components')
    .directive('percentValueTextBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/percent-value-text-box/template.html',
            controller: ['$scope', function($scope) {
                var vm = this;

                $scope.$on('kendoWidgetCreated', function(event, widget) {
                    widget.wrapper
                        .find('.k-formatted-value')
                        .attr('title', vm.title);
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
                events: '=',
                validation: '='
            }
        };
    });
