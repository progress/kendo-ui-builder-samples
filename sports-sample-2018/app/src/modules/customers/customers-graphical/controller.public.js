/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import BaseController from './controller.js'

class CustomersCustomersGraphicalCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
        // this.$components['searchBar'].options.placeholder = "Search for customers by country";
        this.$components['countryChart'].options.series[0] = {
            field: "CountryCount",
            name: "Number of Customers",
            color: "#df5e74",
            overlay: {
                gradient: "none"
            }
        }

        this.$components['countryChart'].options.categoryAxis.labels.rotation = 270;
        this.$components['countryChart'].options.valueAxis.labels.rotation = 0;

        this.$components['pieChart'].options.series[0] = {
            field: "AvgBalance",
            categoryField: "Country",
            name: "Country Balances",
            overlay: {
                gradient: "none"
            },
            tooltip: {
                template: "#= category #: $#= value #",
            }
        }
        this.$components['pieChart'].options.seriesColors = ["#df5e74", "#e3e5b3", "#8ec1c5", 
                                                            "#eaeef4", "#959900", "#c0a8b7", "#9c6683", "#808c9e"];
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
        var jsdo = this.$ds['CustomerData'].transport.jsdo;
        var countryChart = this.$components['countryChart'].options;
        var pieChart = this.$components['pieChart'].options;
        var ttCountry, newDataSource;

        jsdo.invoke("CountryList", {})
                .then(function (jsdo, success, request) {
                    if (success) {  
                        ttCountry = request.response.ttCountry.ttCountry;
                        console.log(ttCountry);
                        newDataSource = new kendo.data.DataSource({
                            data: ttCountry
                        })    
                        console.log("invoked");
                        
                        /* Set new data sources for charts */
                        $scope.$watch(function() {
                            return $("#countryChart").data("kendoChart");
                        }, function(countryChart, oldValue) {
                            if (countryChart) {
                                countryChart.setDataSource(newDataSource);
                                countryChart.refresh();
                            }
                        });

                        $scope.$watch(function() {
                            return $("#pieChart").data("kendoChart");
                        }, function(pieChart, oldValue) {
                            if (pieChart) {
                                pieChart.setDataSource(newDataSource);
                                pieChart.refresh();
                            }
                        });
                    }
                }, function () {
                    console.log("Error while calling invoke operation.");
                });
    }

    changeEvent(e) {
        var value = e.sender.value();
        if (value) {
            this.$ds['CustomerData'].filter({ field: "Country", operator: "eq", value: value });
        } else {
            this.$ds['CustomerData'].filter({});
        }
    }
}

CustomersCustomersGraphicalCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default CustomersCustomersGraphicalCtrl