///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            id: '@',
            title: '@',
            model: '=',
            options: '=',
            events: '=',
            validation: '='
        },
        controller: function() {
            var vm = this;

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