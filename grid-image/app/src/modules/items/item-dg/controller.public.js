import BaseController from './controller.js'

class ItemsItemDGCtrl extends BaseController {
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
    /* Kendo event object*/
    onRowSelect(e) {

    }

	rowTemplate(dataItem) {
		var template = kendo.template(
				'<tr data-uid="#= uid #">' +
						'<td><img src="images/#= kendo.toString(CatPage, "cat00000") #.jpg" onerror="this.onerror=null;this.src=\'images/cat00000.jpg\';" width=128></td>' +
						'<td>#= Itemnum #</td>' +
						'<td>#= ItemName #</td>' +
						'<td>#= Price #</td>' +
						'<td>#= CatDescription #</td>' +
						'</tr>'
			);
		return template(dataItem);
	}	

}

ItemsItemDGCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ItemsItemDGCtrl