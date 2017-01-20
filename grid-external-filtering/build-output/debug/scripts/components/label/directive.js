'use strict';

angular.module('components')
    .directive('kbLabel', function () {
        return {
            templateUrl: 'scripts/components/label/template.html',
            controller: function(){},
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                forAttribute: '@',
                text: '@'
            }
        };
    });
