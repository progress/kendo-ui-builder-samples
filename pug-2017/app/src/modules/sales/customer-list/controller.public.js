import BaseController from './controller.js'

class SalesCustomerListCtrl extends BaseController {
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

        $scope.$on("kendoRendered", function(event) {
            // Find control by using it's ID and disable it.
            // ID can be found by using the Web Inspector.
            // Can also be found using KUIB tool, when you bring up 
            // 'Form Fields' dialog, and then select the field. 
            // Id is displayed in Properties List.
            angular.element("#ctl502").attr("disabled", true);
        }); 

    }
    /* Kendo event object*/
    onRowSelect(e) {

    }

}

SalesCustomerListCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default SalesCustomerListCtrl