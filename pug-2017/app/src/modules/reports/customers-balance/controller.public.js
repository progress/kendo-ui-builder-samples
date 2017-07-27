import BaseController from './controller.js'

class ReportsCustomersBalanceCtrl extends BaseController {
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

    onSeriesClick(e) {
        angular.element('#cust').html(e.dataItem.Name);
        this.$ds['custOrders'].filter({ 
            field: 'CustNum', op: 'eq', value: e.dataItem.CustNum
        });
    }
}

ReportsCustomersBalanceCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ReportsCustomersBalanceCtrl