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
            name: '@',
            title: '@',
            widget: '=',
            model: '=',
            options: '=',
            events: '=',
            validation: '=',
            placeholder: '='
        },
        controller: ['$scope', function($scope) {
            var vm = this;

            $scope.$on('kendoWidgetCreated', function(event, widget) {
                if (vm.placeholder) {
                    widget.wrapper.find('input')
                        .attr('placeholder', vm.placeholder);
                }

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