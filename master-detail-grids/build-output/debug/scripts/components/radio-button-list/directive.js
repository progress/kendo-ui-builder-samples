'use strict';

angular.module('components')
    .directive('radioButtonList', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                trueText: '@',
                falseText: '@',
                defaultValue: '@',
                model: '=',
                events: '='
            },
            controller: function() {
                var vm = this;

                vm.onChange = function() {
                    if (vm.events && vm.events.onChange) {
                        vm.events.onChange({ value: vm.model });
                    }
                };
            },
            controllerAs: 'vm',
            templateUrl: 'scripts/components/radio-button-list/template.html'
        };
    });
