///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            id: '@',
            name: '@',
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
                    vm.events.onChange({
                        value: vm.model
                    });
                }
            };
        },
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;