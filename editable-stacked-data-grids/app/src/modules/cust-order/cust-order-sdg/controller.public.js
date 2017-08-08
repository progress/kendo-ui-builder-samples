import BaseController from './controller.js'

class CustOrderCustOrderSDGCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);

        this.$model.parentGridOptions.toolbar = ["create", "cancel"];
        this.$model.parentGridOptions.columns.push({
            "command": [
                "destroy"
            ],
            "title": "&nbsp;",
            "width": 250
        });
                    
        this.$model.parentGridOptions.editable = "incell";
        this.$model.childGridOptions.toolbar = ["create", "cancel"];

        this.$model.parentGridOptions.messages =  this.$model.childGridOptions.messages;


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
    onParentRowSelect(e) {

    }

    /* Kendo event object*/
    onChildRowSelect(e) {

    }
}

CustOrderCustOrderSDGCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default CustOrderCustOrderSDGCtrl