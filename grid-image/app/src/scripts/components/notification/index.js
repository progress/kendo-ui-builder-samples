///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive() {
    return {
        scope: {},
        bindToController: true,
        controller: ['$rootScope', function($rootScope) {
            var vm = this;

            vm.options = {
                animation: {
                    open: {
                        effects: "slideIn:down"
                    },
                    close: {
                        effects: "slideIn:down",
                        reverse: true
                    },
                },
                autoHideAfter: 0,
                hideOnClick: true,
                position: {
                    top: 0,
                    left: "37%"
                },
                width: 500
            };

            $rootScope.$on('notification', function(event, args) {
                vm.notification.show(args.message, args.type);
            });
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;