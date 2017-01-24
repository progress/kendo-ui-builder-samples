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
