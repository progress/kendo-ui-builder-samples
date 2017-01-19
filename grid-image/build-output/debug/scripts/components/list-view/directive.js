'use strict';

angular.module('components')
    .directive('listView', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                widget: '=',
                model: '=?',
                options: '=',
                events: '=',
                domReady: '='
            },
            controller: ['$scope', function ($scope) {
                var vm = this;
                var onChangeHandler = function (e) {
                    vm.model = kendo.proxyModelSetters(vm.widget.dataItem(vm.widget.select()));
                    vm.events.onChange(e);
                };

                vm.onChange = onChangeHandler;
                vm.onDataBound = function (e) {
                    vm.restoreSelection();

                    if (vm.events.onDataBound) {
                        vm.events.onDataBound(e);
                    }
                };

                vm.restoreSelection = function (newModel, oldModel) {
                    if (newModel && vm.widget && vm.widget.selectable) {
                        var item = vm.widget.element.find("[data-uid='" + vm.model.uid + "']");
                        if (item.length) {
                            //detach change handler in order to prevent recursion
                            vm.onChange = angular.noop;
                            vm.widget.select(item);
                            // attach change handler again
                            vm.onChange = onChangeHandler;
                        } else {
                            vm.widget.selectable.clear();
                        }
                    } else if (vm.widget && vm.widget.selectable && vm.widget.select().length) {
                        vm.widget.selectable.clear();
                    }
                };

                var widgetCreatedHandler = $scope.$on("kendoWidgetCreated", function(event, widget) {
                    $scope.$watch('vm.model', vm.restoreSelection);
                    widgetCreatedHandler();
                });

            }],
            controllerAs: 'vm',
            templateUrl: 'scripts/components/list-view/template.html'
        };
    });
