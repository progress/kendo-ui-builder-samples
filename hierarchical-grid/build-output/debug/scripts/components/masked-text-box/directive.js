'use strict';

angular.module('components')
    .directive('maskedTextBox', function () {
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
            templateUrl: 'scripts/components/masked-text-box/template.html'
        };
    });
