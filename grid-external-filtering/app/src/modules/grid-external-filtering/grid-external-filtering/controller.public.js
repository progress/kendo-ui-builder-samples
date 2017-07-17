import BaseController from './controller.js'

class GridExternalFilteringGridExternalFilteringCtrl extends BaseController {
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

	changeHandler(e) {
		var filter,
			value = e.value;
		if (value) {
			filter = {
				logic: 'or',
				filters: [
					{ field: 'Name', operator: 'contains', value: value },
					{ field: 'Address', operator: 'contains', value: value },
					{ field: 'Phone', operator: 'contains', value: value },
					{ field: 'SalesRep', operator: 'contains', value: value },
					{ field: 'State', operator: 'contains', value: value },
					{ field: 'Country', operator: 'contains', value: value }
				]
			};

			this.$ds.customerDs.filter(filter);
		} else {
			this.$ds.customerDs.filter({});
		}
	}	

}

GridExternalFilteringGridExternalFilteringCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default GridExternalFilteringGridExternalFilteringCtrl