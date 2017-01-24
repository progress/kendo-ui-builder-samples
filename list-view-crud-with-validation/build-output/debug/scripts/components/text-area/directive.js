'use strict';

angular.module('components')
    .directive('textArea', function () {
        return {
            templateUrl: 'scripts/components/text-area/template.html',
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
                debounce: '@',
                defaultValue: '@',
                placeholder: '@',
                rows: '@',
                columns: '@',
                events: '=',
                model: '=',
                validation: '='
            }
        };
    });
