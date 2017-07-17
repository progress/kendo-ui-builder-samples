import BaseController from './controller.js'

class CustomersCustomerViewCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);

        this.$ds.SalesrepDS.read();

        var that = this;
        
        this.$components.grid0.options.columns[3].template = function(dataItem) {
            that.$ds.SalesrepDS.filter(
                {field: "SalesRep", operation: "eq", value: dataItem.SalesRep}
            );
            var view = that.$ds.SalesrepDS.view();
            return "<span>" + kendo.htmlEncode(view[0].RepName) + "</span>";
        };
    
        this.$components.grid0.options.columns[3].editor = function(container, options) {
            var input = $("<input/>");
            input.attr("name", options.field);
    
            // Clear filter to ensure that all values are shown
            that.$ds.SalesrepDS.filter({});
    
            input.appendTo(container);
            input.kendoDropDownList({
                dataSource: that.$ds.SalesrepDS,
                dataTextField: "RepName",
                dataValueField: "SalesRep",               
            })
        };
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

CustomersCustomerViewCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default CustomersCustomerViewCtrl