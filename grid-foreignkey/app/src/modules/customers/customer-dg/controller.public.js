import BaseController from './controller.js'

class CustomersCustomerDGCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);

        var that = this;
        
        // Create JSDO Session for Salesrep service
        // Specified function is called on successful creation of the session
        this.createJSDOSession(function () {
            // create JSDO instance
            //var jsdo = new progress.data.JSDO({ name: 'Salesrep' });

            // console.log("DEBUG: createDS: ");
            that.salesrepDS = new kendo.data.DataSource({
                type: "jsdo",
                transport: {
                    jsdo: "Salesrep"
                }
            });
            that.salesrepDS.fetch(function () {
                // console.log("DEBUG: After fetch: ");
            });
        });
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
        this.scope = $scope;
    }
    /* Kendo event object*/
    onRowSelect(e) {

    }

    rowTemplate(dataItem) {
        var template = kendo.template(
                '<tr data-uid="#= uid #">' +
                        '<td>#= CustNum #</td>' +
                        '<td>#= Name #</td>' +
                        '<td>#= SalesRep #</td>' +
                    '</tr>'
            ),
            view;

        // console.log("DEBUG: rowTemplate: ");                    
        // Filter records on the client side for given SalesRep
        if (this.salesrepDS) {
            this.salesrepDS.filter(
                {field: "SalesRep", operation: "eq", value: dataItem.SalesRep}
            );
            view = this.salesrepDS.view();

            if (view.length) {
                template = kendo.template(
                    '<tr data-uid="#= uid #">' +
                            '<td>#= CustNum #</td>' +
                            '<td>#= Name #</td>' +
                            '<td><b>#= SalesRep #</b> ' + view[0].RepName + '</td>' +
                        '</tr>'
                );
            }
        }
        return template(dataItem);
    }

    createJSDOSession(onSuccessFn) {
        try {
            var serviceURI = "http://oemobiledemo.progress.com/DynamicService",
                catalogURI = serviceURI + "/web/DynamicService/catalog/Salesrep"

            // create a new session object
            progress.data.getSession({
                serviceURI: serviceURI,
                catalogURI: catalogURI,
                authenticationModel: "anonymous"
            }).then(function (session) {
                onSuccessFn(session);
            }, function(result, info) {
                alert("Error creating JSDOSession: ");
            });
        } catch (e) {
            alert("Error instantiating objects: " + e);
        }
    }
}

CustomersCustomerDGCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default CustomersCustomerDGCtrl

