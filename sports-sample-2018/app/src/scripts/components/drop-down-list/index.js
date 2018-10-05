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
            name: '@',
            title: '@',
            widget: '=',
            model: '=',
            options: '=',
            events: '=',
            validation: '=',
            domReady: '=?'
        },
        controller: ['$scope', function($scope) {
            var vm = this;
            var changeTriggered = false;

            if (vm.domReady === undefined) {
                vm.domReady = true;
            }

            vm.onChange = function(e) {
                if (vm.options.dataValueField) {
                    var item = e.sender.dataItem();
                    vm.model = vm.options.valuePrimitive ? item[vm.options.dataValueField] : kendo.proxyModelSetters(item);
                    changeTriggered = true;
                }
                if (vm.events && vm.events.onChange) {
                    vm.events.onChange(e);
                }
            };

            var widgetCreatedHandler = $scope.$on("kendoWidgetCreated", function(event, widget) {
                $scope.$watch('vm.model', vm.setValue);
                var name = vm.name || vm.id;
                widget.element.attr({
                    'title': vm.title,
                    'name': `${name}_input`
                });
                widgetCreatedHandler();
            });

            vm.setValue = function(newModel, oldModel) {
                if (vm.options.dataValueField && newModel && !changeTriggered && !(vm.model.kuibPristine && vm.model.kuibPristine())) {
                    var value = vm.options.valuePrimitive ? newModel : newModel[vm.options.dataValueField];
                    vm.widget.value(value);
                }

                changeTriggered = false;
            }
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;