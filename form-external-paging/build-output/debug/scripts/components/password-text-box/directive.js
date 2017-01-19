'use strict';

angular.module('components')
    .directive('passwordTextBox', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                title: '@',
                debounce: '@',
                placeholder: '@',
                model: '=',
                events: '=',
                validation: '='
            },
            controller: function() {
                var vm = this;

                vm.modelOptions = {
                    debounce: vm.debounce ? parseInt(vm.debounce) : 0
                };

                vm.onChange = function() {
                    if (vm.events && vm.events.onChange) {
                        vm.events.onChange({ value: vm.model });
                    }
                };
            },
            controllerAs: 'vm',
            templateUrl: 'scripts/components/password-text-box/template.html'
        };
    });
