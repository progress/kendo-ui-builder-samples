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
            title: '@',
            widget: '=',
            model: '=',
            options: '=',
            events: '=',
            validation: '='
        },
        controller: ['$scope', function($scope) {
            var vm = this;
            vm.onChange = function(e) {
                if (vm.options.dataTextField) {
                    var item = e.sender.dataItem();
                    if (item) {
                        vm.model = vm.options.valuePrimitive ? item[vm.options.dataTextField] : kendo.proxyModelSetters(item);
                    }
                }
                if (vm.events && vm.events.onChange) {
                    vm.events.onChange(e);
                }
            };

            var widgetCreatedHandler = $scope.$on("kendoWidgetCreated", function(event, widget) {
                $scope.$watch('vm.model', vm.setValue);
                widget.element.attr({
                    'title': vm.title
                });
                widgetCreatedHandler();
            });

            vm.setValue = function(newModel) {
                if (vm.options.dataTextField && newModel) {
                    var value = vm.options.valuePrimitive ? newModel : newModel[vm.options.dataTextField];
                    vm.widget.value(value);
                }
            }
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;