import BaseController from './controller.js'

class MainDashboardCtrl extends BaseController {
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
        this.$scope.$on('$includeContentLoaded', () => {
            var titleDiv = angular.element('<div class="one"><h3>Warehouse Locations</h3></div>');
            var mapDiv = angular.element('<div class="two"></div>');

            var col = angular.element(angular.element('.col-sm-6').get(1));

            titleDiv.appendTo(col);
            mapDiv.appendTo(col);

            // Got from http://demos.telerik.com/kendo-ui/map/index 
            angular.element('.two').kendoMap({
                center: [42.9956, -71.4548],
                zoom: 3,
                layers: [{
                    type: "tile",
                    urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                    subdomains: ["a", "b", "c"],
                    attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>"
                }],
                markers: [{
                    location: [42.9977883, -71.4549864],
                    shape: "pinTarget",
                    tooltip: {
                        content: "Bedford, MA"
                    }
                }, {
                    location: [33.9446452, -84.2196691],
                    shape: "pinTarget",
                    tooltip: {
                        content: "Norcross, GA"
                    }
                }, {
                    location: [41.8371667, -87.9750416],
                    shape: "pinTarget",
                    tooltip: {
                        content: "Oak Brook, IL"
                    }
                }, {
                    location: [37.6227597, -122.4539191],
                    shape: "pinTarget",
                    tooltip: {
                        content: "San Bruno, CA"
                    }
                },
                {
                    location: [43.6090689, -79.8164697],
                    shape: "pinTarget",
                    tooltip: {
                        content: "Mississauga, Ontario"
                    }
                }]
            });
        });
    }

    salesPersonNameFn(e) {
        return e.dataItem.RepName;
    }
}

MainDashboardCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default MainDashboardCtrl