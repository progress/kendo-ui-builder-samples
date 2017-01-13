'use strict';

angular.module('components')
    .directive('editor', function () {
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
            controller: function() {
            },
            controllerAs: 'vm',
            templateUrl: 'scripts/components/editor/template.html'
        };
    });
