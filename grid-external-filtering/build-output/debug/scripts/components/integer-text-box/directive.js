'use strict';

angular.module('components')
    .directive('integerTextBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/integer-text-box/template.html',
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
