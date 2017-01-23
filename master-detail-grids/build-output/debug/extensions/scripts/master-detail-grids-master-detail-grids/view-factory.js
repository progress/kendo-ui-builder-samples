/*global angular */
/*jslint nomen: true */
(function (angular) {
    "use strict";
    angular
        .module('viewFactories')
        .factory('masterDetailGridsMasterDetailGrids', ['$q', 'dsService', function ($q, dsService) {

            function MasterDetailGridsMasterDetailGrids() {
                this.scope = null;
            }

            MasterDetailGridsMasterDetailGrids.prototype = {
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

                    // Watch model for changes in the parent, and then filter 
					// the detail grid
                    $scope.$watch(function () {
                        return $scope._$viewModels.CustOrderModel;
                    }, function (newValue, oldValue) {
                        var filter = {
                            field: 'CustNum',
                            operator: 'eq',
                            value: newValue.CustNum
                        };

                        $scope._$ds.CustOrderDetail.filter(filter);
                    });
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function (customData) {

                },

                dataBoundHandler: function () {
					// On data load, select the first row in master grid
                    this.scope.gridMaster.widget.select('tr[data-uid]:eq(0)');
                },

                rowSelectHandler: function () {
                    
                }
            };

            return new MasterDetailGridsMasterDetailGrids();
        }]);

}(angular));
