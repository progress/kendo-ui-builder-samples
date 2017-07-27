import BaseController from './controller.js'

class SalesInventoryCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
    onShow($scope) {
        console.log('Show');
    }

}

SalesInventoryCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default SalesInventoryCtrl