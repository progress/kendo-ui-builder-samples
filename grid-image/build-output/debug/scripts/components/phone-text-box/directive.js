'use strict';

angular.module('components')
    .directive('phoneTextBox', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                title: '@',
                widget: '=',
                model: '=',
                options: '=',
                events: '=',
                validator: '=',
                validation: '='
            },
            controller: function() {
            },
            controllerAs: 'vm',
            templateUrl: 'scripts/components/phone-text-box/template.html',
            link: function(scope, element, attrs, controller) {
                if (controller.validator) {
                    controller.validator.options.rules.validmask = function (input) {
                        if (input.is("[data-validmask-msg]") && input.val() != "") {
                            var maskedtextbox = input.data("kendoMaskedTextBox");
                            return maskedtextbox.value().indexOf(maskedtextbox.options.promptChar) === -1;
                        }
                        return true;
                    }

                    controller.validator.setOptions(controller.validator.options.rules);
                }
            }
        };
    });
