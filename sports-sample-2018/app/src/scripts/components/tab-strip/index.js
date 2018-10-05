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
        transclude: true,
        bindToController: {
            id: '@',
            widget: '=',
            options: '=',
            events: '=',
            items: '='
        },
        link: function(scope, element, attrs, ctrl, transclude) {
            var elem = element;
            transclude((clone) => {
                angular.element(element.children('[kendo-tab-strip]')).append(clone);
                ctrl.domReady = true;
                scope.$on('kendoWidgetCreated', function(event, widget) {
                    var editorElem = element.find('editor textarea');

                    if (widget === ctrl.widget) {
                        if (editorElem.length > 0) {
                            editorElem.data('kendoEditor').refresh();
                        }
                    }
                });
            });
        },
        controller: function() {
            var vm = this;

            vm.onShow = function(e) {
                if (vm.events && vm.events.onShow) {
                    vm.events.onShow(e);
                }
            };

            vm.onSelect = function(e) {
                if (vm.events && vm.events.onSelect) {
                    vm.events.onSelect(e);
                }
            };
        },
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;