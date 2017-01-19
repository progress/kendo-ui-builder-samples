'use strict';

angular.module('components')
    .directive('textBox', function () {
        return {
            templateUrl: 'scripts/components/text-box/template.html',
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
            scope: {},
            bindToController: {
                id: '@',
                title: '@',
                placeholder: '@',
                debounce: '@',
                defaultValue: '@',
                model: '=',
                events: '=',
                validation: '='
            }
        };
    });
