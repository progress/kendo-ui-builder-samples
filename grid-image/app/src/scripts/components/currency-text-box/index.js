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
            title: '@',
            widget: '=',
            model: '=',
            options: '=',
            events: '=',
            validation: '='
        },
        controller: ['$scope', function($scope) {
            var vm = this;

            $scope.$on('kendoWidgetCreated', function(event, widget) {
                widget.wrapper
                    .find('.k-formatted-value')
                    .attr('title', vm.title);
            });
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;