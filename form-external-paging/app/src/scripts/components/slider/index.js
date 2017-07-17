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
        controller: ['$scope', function($scope) {
            var vm = this;

            $scope.$on('kendoWidgetCreated', function(event, widget) {
                widget.wrapper.attr('title', vm.title);
            });

            $scope.$on('windowResize', function() {
                if (vm.widget) {
                    vm.widget.resize();
                }
            });
        }],
        controllerAs: 'vm',
        bindToController: {
            id: '@',
            title: '@',
            widget: '=',
            model: '=',
            options: '=',
            events: '='
        },
        templateUrl: template
    };
}

export default directive;