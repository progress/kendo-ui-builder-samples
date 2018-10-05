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
            widget: '=',
            options: '=',
            events: '=',
            domReady: '='
        },
        controller: ['$translate', function($translate) {
            var vm = this;

            vm.$onChanges = function() {
                if (!vm.options || !vm.options.items) {
                    return;
                }

                var items = vm.options.items;
                items.forEach(item => {
                    if (item.textKey) {
                        $translate(item.textKey)
                            .then(text => {
                                item.text = text;
                            });
                    }

                    let buttons = item.buttons || item.menuButtons || [];
                    buttons
                        .filter(btn => btn.textKey)
                        .forEach(button => {
                            $translate(button.textKey)
                                .then(text => {
                                    button.text = text;
                                });
                        });
                });
            };
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;