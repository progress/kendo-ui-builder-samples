'use strict';

angular.module('components')
    .directive('urlTextBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/url-text-box/template.html',
            controller: function(){},
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                id: '@',
                title: '@',
                model: '=',
                options: '=',
                events: '=',
                validation: '='
            }
        };
    });
