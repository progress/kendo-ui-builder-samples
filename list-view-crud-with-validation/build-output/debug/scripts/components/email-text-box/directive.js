'use strict';

angular.module('components')
    .directive('emailTextBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/email-text-box/template.html',
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
