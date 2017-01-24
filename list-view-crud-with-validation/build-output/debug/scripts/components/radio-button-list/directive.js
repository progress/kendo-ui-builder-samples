'use strict';

angular.module('components')
    .directive('radioButtonList', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                trueText: '@',
                falseText: '@',
                defaultValue: '@',
                model: '=',
                events: '='
            },
            controller: function() {
            },
            controllerAs: 'vm',
            templateUrl: 'scripts/components/radio-button-list/template.html'
        };
    });
