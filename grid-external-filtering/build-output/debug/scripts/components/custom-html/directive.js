(function(angular) {

    'use strict';

    angular.module('components')
        .directive('kbCustomHtml', ['$sce', function ($sce) {
            return {
                restrict: 'E',
                scope: true,
                bindToController: {
                    id: '@',
                    options: '=',
                },
                controller: function() {
                    var vm = this;
                    var tempElement = angular.element('<div />').html(vm.options.html);
                    vm.html = $sce.trustAsHtml(tempElement.text());
                },
                controllerAs: 'vm',
                templateUrl: 'scripts/components/custom-html/template.html'
            };
        }]);

})(angular);
