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
            defaultValue: '@',
            model: '='
        },
        controller: function() {},
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;