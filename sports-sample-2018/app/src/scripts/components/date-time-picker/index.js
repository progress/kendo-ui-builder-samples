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
            widget: '=',
            model: '=',
            options: '=',
            events: '=',
            validation: '=',
            validator: '='
        },
        controller: function() {},
        link: function(scope, element, attrs, controller) {
            if (controller.validator) {
                controller.validator.options.rules.validdate = function(input) {
                    if (input.is("[data-validdate-msg]") && input.val() != "") {
                        var currentDate = Date.parse(input.val());
                        //Check if Date parse is successful
                        if (!currentDate) {
                            return false;
                        }
                    }

                    return true;
                }
            }
        },
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;