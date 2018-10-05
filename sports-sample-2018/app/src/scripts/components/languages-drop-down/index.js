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
            domReady: '=?'
        },
        controller: ['$scope', '$timeout', '$window', 'translationsService', function($scope, $timeout, $window, translationsService) {
            const vm = this;
            let changeTriggered = false;

            if (vm.domReady === undefined) {
                vm.domReady = true;
            }

            vm.onChange = function(e) {
                const selectedKey = e.sender.value();
                const selectedLanguage = vm.options.dataSource.find(x => x.key === selectedKey);

                if (vm.events && vm.events.onChange) {
                    vm.events.onChange(e);
                }

                translationsService.setLanguage(selectedKey);
                translationsService.setCulture(selectedLanguage.culture);

                $timeout(function() {
                    $window.location.reload();
                });
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