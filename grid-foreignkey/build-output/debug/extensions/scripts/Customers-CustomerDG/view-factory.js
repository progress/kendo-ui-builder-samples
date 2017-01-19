/*global angular, kendo, progress, alert, console */
(function (angular) {

    "use strict";
    
    angular
        .module('viewFactories')
        .factory('customersCustomerDg', ['$q', 'dsService', function ($q, dsService) {

            function CustomersCustomerDg() {
                this.scope = null;
            }

            CustomersCustomerDg.prototype = {
                /*  The resolve method could return arbitrary data, 
                    which will be available in the "viewShowHandler" and "viewHideHandler" handler as the customData argument */
                onInit: function ($stateParams) {
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
                    
                    return $q(function (resolve, reject) {
                        resolve({});
                    });
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onShow: function ($scope, customData) {
                    this.scope = $scope;                                        
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function (customData) {

                },
                /* Kendo event object*/
                onRowSelect: function (e) {

                },
				rowTemplate: function (dataItem) {
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
				},
				createJSDOSession: function (onSuccessFn) {
					try {
						var serviceURI = "http://oemobiledemo.progress.com/DynamicService",
							catalogURI = serviceURI + "/web/DynamicService/catalog/Salesrep",
							jsdosession,
                            jsdo;

						// create a new session object
						jsdosession = new progress.data.JSDOSession({
							serviceURI: serviceURI,
							catalogURIs: catalogURI
						});
						jsdosession.login("", "").done(function (jsdosession, result, info) {
						
							// load the catalog for the session
							jsdosession.addCatalog(catalogURI)
								.done(function (jsdosession, result, details) {
                                    if (typeof onSuccessFn === "function") {
                                        onSuccessFn(jsdosession, result, details);
                                    }
								});
						});
					} catch (e) {
						alert("Error instantiating objects: " + e);
					}
				}
            };

            return new CustomersCustomerDg();
        }]);

}(angular));
