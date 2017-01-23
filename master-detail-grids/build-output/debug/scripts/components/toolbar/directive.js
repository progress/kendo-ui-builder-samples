'use strict';

angular.module('components')
    .directive('toolbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/toolbar/template.html',
            controller: function(){},
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                id: '@',
                widget: '=',
                options: '=',
                events: '=',
                domReady: '='
            }
        };
    });
