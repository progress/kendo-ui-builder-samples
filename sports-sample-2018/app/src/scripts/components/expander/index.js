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
        transclude: true,
        bindToController: {
            id: '@',
            expanded: '@',
            text: '@'
        },
        link: function(scope, element, attrs, ctrl, transclude) {
            var elem = element;
            transclude((clone) => {
                angular.element(element.find('.kuib-expander__container')).append(clone);
            });
        },
        controller: function() {},
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;