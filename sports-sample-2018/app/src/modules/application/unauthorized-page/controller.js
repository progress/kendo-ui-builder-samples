///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$injector = $injector;
        this.$customSections = {
            top: 'views.application.unauthorized-page.topSection.html',
            bottom: 'views.application.unauthorized-page.bottomSection.html'
        };
    }

    $onInit() {
        this.$scope.$on('$viewContentLoaded', (e) => {
            if (this['onShow']) {
                this['onShow'](e.currentScope);
            }
        });
    }
}

BaseController.$inject = ['$scope', '$injector'];

export default BaseController