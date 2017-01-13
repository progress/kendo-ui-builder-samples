(function(angular) {
    'use strict';

    angular.module('views')
        .controller('LandingPageCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            
            $scope.$on('$viewContentLoaded', function(e) {
                $injector.get('applicationLandingPage')['onShow'](e.currentScope, onInit);
            });
            

            $scope.customSections = {
                  top:  'extensions/html/Application-landing-page/topSection.html',
                  bottom: 'extensions/html/Application-landing-page/bottomSection.html'
            };

            var TOLERANCE = 151; // needed for very edge cases when someone clicks with the speed of light

            var tooltip = angular.element(".modules-list-wrapper").kendoTooltip({
                filter: "a[title]",
                position: "bottom",
                width: 180,
            }).data("kendoTooltip");

            $scope.onHideTooltip = function() {
                setTimeout(function() {
                    tooltip.hide();
                }, TOLERANCE);
            };
        }]);
})(angular);
