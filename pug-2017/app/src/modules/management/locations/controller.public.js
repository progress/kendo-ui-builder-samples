import BaseController from './controller.js'

class ManagementLocationsCtrl extends BaseController {
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
    
    onRowSelect(e) {
        var warehouseNum = e.sender.dataItem(e.sender.select()).WarehouseNum;
        if (warehouseNum < 6) {
            this.imageUrl = `../images/${warehouseNum}Warehouse.jpg`;
        } else {
            this.imageUrl = `../images/GenericWarehouse.jpg`;
        }
    }
}

ManagementLocationsCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ManagementLocationsCtrl