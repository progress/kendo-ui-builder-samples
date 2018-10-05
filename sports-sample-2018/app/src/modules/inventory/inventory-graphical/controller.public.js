/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import BaseController from './controller.js'

class InventoryInventoryGraphicalCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
        this.$components['searchBar'].options.placeholder = "Search for an item by name";
        this.$components['priceChart'].options.series[0].color = "#df5e74";
        this.$components['priceChart'].options.series[0].labels.format = '${0}';
        this.$components['priceChart'].options.valueAxis.labels.format = '${0}';
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

InventoryInventoryGraphicalCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default InventoryInventoryGraphicalCtrl