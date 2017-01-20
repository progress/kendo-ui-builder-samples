(function(angular) {

    'use strict';

    angular.module('components')
        .directive('calendar', function () {
            return {
                restrict: 'E',
                scope: true,
                bindToController: {
                    id: '@',
                    widget: '=',
                    model: '=',
                    options: '=',
                    events: '='
                },
                controller: function() {
                },
                controllerAs: 'vm',
                templateUrl: 'scripts/components/calendar/template.html'
            };
        });
})(angular);
