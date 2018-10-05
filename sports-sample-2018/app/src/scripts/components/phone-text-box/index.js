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
            validator: '=',
            validation: '='
        },
        link: function(scope, element, attrs, controller) {
            if (controller.validator) {
                controller.validator.options.rules.validmask = function(input) {
                    if (input.is("[data-validmask-msg]") && input.val() != "") {
                        var maskedtextbox = input.data("kendoMaskedTextBox");
                        return maskedtextbox.value().indexOf(maskedtextbox.options.promptChar) === -1;
                    }
                    return true;
                }

                controller.validator.setOptions(controller.validator.options.rules);
            }
        },
        controller: function() {},
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;