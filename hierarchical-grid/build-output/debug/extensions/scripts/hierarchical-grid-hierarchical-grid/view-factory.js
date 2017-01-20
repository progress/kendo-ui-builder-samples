/*global angular */
/*jslint nomen: true */
(function (angular) {
    "use strict";
    angular
        .module('viewFactories')
        .factory('hierarchicalGridHierarchicalGrid', ['$q', 'dsService', function ($q, dsService) {

            function HierarchicalGridHierarchicalGrid() {
                this.scope = null;
            }

            HierarchicalGridHierarchicalGrid.prototype = {
                /*  The resolve method could return arbitrary data,
                    which will be available in the "viewShowHandler" and "viewHideHandler" handler as the customData argument */
                onInit: function ($stateParams) {
                    return $q(function (resolve, reject) {
                        resolve({});
                    });
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onShow: function ($scope, customData) {
                    this.scope = $scope;
                    this.scope.grid.options.height = 700;
					
					// Set the grid's detailInit event handler to create the detail/child grid
					// when expanding the row
                    this.scope.grid.options.detailInit = function (e) {
                        var dataSourceOptions = $scope._$ds.order.options,
                            detailsGridOptions;

                        dataSourceOptions.filter = {
                            field: 'CustNum',
                            operator: 'eq',
                            value: e.data.CustNum
                        };
                        detailsGridOptions = {
                            dataSource: dataSourceOptions,
                            columns: [
                                //{ field: "CustNum",  title: "Cust Num", type: "int", width: "100px" },
                                { field: "OrderNum", width: "70px" },
                                { field: "OrderDate", width: "110px", type: "date", format: "{0:MM-dd-yyyy}" },
                                { field: "SalesRep", width: "110px" },
                                { field: "OrderStatus", width: "110px" },
                                { field: "Carrier", width: "110px" }
                            ],
                            height: 200
                        };

                        angular.element('<div/>').appendTo(e.detailCell).kendoGrid(detailsGridOptions);
                    };
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function (customData) {

                }
            };

            return new HierarchicalGridHierarchicalGrid();
        }]);

}(angular));
