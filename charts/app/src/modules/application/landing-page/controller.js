///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$injector = $injector;
        this.$TOLERANCE = 151; // needed for very edge cases when someone clicks with the speed of light
        this.$customSections = {
            top: 'views.application.landing-page.topSection.html',
            bottom: 'views.application.landing-page.bottomSection.html'
        };

        this.$tooltip = angular.element(".modules-list-wrapper").kendoTooltip({
            filter: "a[title]",
            position: "bottom",
            width: 180,
        }).data("kendoTooltip");
    }

    $onInit() {
        this.$scope.$on('$viewContentLoaded', (e) => {
            if (this['onShow']) {
                this['onShow'](e.currentScope);
            }
        });

        this.$scope._$onHideTooltip = () => {
            setTimeout(() => {
                this.$tooltip.hide();
            }, this.$TOLERANCE);
        };
    }
}

BaseController.$inject = ['$scope', '$injector'];

export default BaseController