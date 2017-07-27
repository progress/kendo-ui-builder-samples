import BaseController from './controller.js'

class ManagementRepsCtrl extends BaseController {
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
            // Find control by using it's ID and disable it
            // ID can be found by using the Web Inspector
            angular.element("#ctl121").attr("disabled", true);
        });        
    }
    /* Kendo event object*/
    onRowSelect(e) {

    }

}

ManagementRepsCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ManagementRepsCtrl