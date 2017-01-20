(function(angular) {
    'use strict';

    angular.module('components')
        .directive('dropDownList', function () {
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
                controller: ['$scope', function ($scope) {
                    var vm = this;
                    vm.onChange = function (e) {
                        if (vm.options.dataValueField) {
                            var item = e.sender.dataItem();
                            vm.model = vm.options.valuePrimitive ? item[vm.options.dataValueField] : kendo.proxyModelSetters(item);
                        }
                        vm.events.onChange(e);
                    };

                    var widgetCreatedHandler = $scope.$on("kendoWidgetCreated", function(event, widget) {
                        $scope.$watch('vm.model', vm.setValue);
                        widget.wrapper.attr({
                            'title': vm.title
                        });
                        widgetCreatedHandler();
                    });

                    vm.setValue = function(newModel, oldModel) {
                        if (vm.options.dataValueField && newModel) {
                            var value = vm.options.valuePrimitive ? newModel : newModel[vm.options.dataValueField];
                            vm.widget.value(value);
                        }
                    }
                }],
                controllerAs: 'vm',
                templateUrl: 'scripts/components/drop-down-list/template.html'
            };
        });
})(angular);
