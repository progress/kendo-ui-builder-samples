///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            id: '@',
            options: '=',
            model: '=',
            events: '='
        },
        controller: ['$scope', 'dsService', function($scope, dsService) {
            var vm = this;
            vm.data = [];

            $scope.$watch('vm.options', function(newValue) {
                newValue.dataSource.fetch().then(function() {
                    obtainData();
                }).fail(errorHandler);

                vm.options.dataSource.one('change', function(e) {
                    if (vm.data.length === 0) {
                        obtainData();
                    }
                });
            })

            vm.onChange = function(e) {
                var item = e.item;
                vm.model = vm.options.valuePrimitive ? item[vm.options.dataValueField] : item;
                if (vm.events && vm.events.onChange) {
                    vm.events.onChange({
                        value: vm.model
                    });
                }
            };

            function obtainData() {
                $scope.$applyAsync(function() {
                    vm.data = vm.options.dataSource.data();
                });
            }

            function errorHandler(e) {
                const message = dsService.extractErrorMessage(e);
                $scope.$emit('notification', {
                    type: 'error',
                    message: e
                });
            }
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;