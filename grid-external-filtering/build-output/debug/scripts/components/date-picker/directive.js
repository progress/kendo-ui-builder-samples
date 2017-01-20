(function(angular) {

    'use strict';

    angular.module('components')
        .directive('datePicker', function () {
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
                templateUrl: 'scripts/components/date-picker/template.html'
            };
        });
})(angular);
