import BaseController from './controller.js'

class ReportsSalesByRepCtrl extends BaseController {
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
    }

}

ReportsSalesByRepCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ReportsSalesByRepCtrl