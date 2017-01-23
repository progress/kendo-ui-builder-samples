'use strict';

angular.module('components')
    .directive('disabledTextBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/disabled-text-box/template.html',
            controller: function(){},
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                id: '@',
                defaultValue: '@',
                model: '='
            }
        };
    });
