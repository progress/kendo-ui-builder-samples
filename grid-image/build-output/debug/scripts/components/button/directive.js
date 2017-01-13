'use strict';

angular.module('components')
    .directive('kbButton', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/button/template.html',
            controller: function(){},
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                id: '@',
                widget: '=',
                options: '=',
                events: '='
            }
        };
    });
