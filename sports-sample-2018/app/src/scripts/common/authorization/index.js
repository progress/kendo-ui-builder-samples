///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function directive(authService) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attributes) {
            const requiredRoles = JSON.parse($attributes.showForRoles);
            if (requiredRoles.length && !authService.isAuthorizedForRoles(requiredRoles)) {
                $element.html('');
            }
        }
    };
}

directive.$inject = ['authService'];

export default directive;