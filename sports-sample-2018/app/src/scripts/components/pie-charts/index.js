///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            id: '@',
            widget: '=',
            model: '=?',
            options: '=',
            titleText: '=',
            events: '=',
            domReady: '=?'
        },
        controller: ['$scope', function($scope) {
            var vm = this;

            if (vm.domReady === undefined) {
                vm.domReady = true;
            }

            vm.onSeriesClick = function(e) {
                vm.model = e.dataItem;
                if (vm.events.onSeriesClick) {
                    vm.events.onSeriesClick(e);
                }
            };
            vm.onDataBound = function(e) {
                if (vm.events.onDataBound) {
                    vm.events.onDataBound(e);
                }
            };
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;