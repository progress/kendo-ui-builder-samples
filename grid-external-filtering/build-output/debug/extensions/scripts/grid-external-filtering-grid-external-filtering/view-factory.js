/*global angular */
/*jslint nomen: true*/
(function (angular) {
    "use strict";
    angular
        .module('viewFactories')
        .factory('gridExternalFilteringGridExternalFiltering', ['$q', 'dsService', function ($q, dsService) {

            function GridExternalFilteringGridExternalFiltering() {
                this.scope = null;
            }

            GridExternalFilteringGridExternalFiltering.prototype = {
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
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function (customData) {

                },

                changeHandler: function (e) {
                    var filter,
                        value = e.value;
                    if (value) {
                        filter = {
                            logic: 'or',
                            filters: [
                                { field: 'Name', operator: 'contains', value: value },
                                { field: 'Address', operator: 'contains', value: value },
                                { field: 'Phone', operator: 'contains', value: value },
                                { field: 'SalesRep', operator: 'contains', value: value },
                                { field: 'State', operator: 'contains', value: value },
                                { field: 'Country', operator: 'contains', value: value }
                            ]
                        };

                        this.scope._$ds.customerDs.filter(filter);
                    } else {
                        this.scope._$ds.customerDs.filter({});
                    }
                }
            };

            return new GridExternalFilteringGridExternalFiltering();
        }]);

}(angular));
