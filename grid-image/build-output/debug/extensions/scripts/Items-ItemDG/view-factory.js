/*global angular, kendo */
(function (angular) {
    "use strict";
    angular
        .module('viewFactories')
        .factory('itemsItemDg', ['$q', 'dsService', function ($q, dsService) {

            function ItemsItemDg() {
                this.scope = null;
            }

            ItemsItemDg.prototype = {
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
                /* Kendo event object*/
                onRowSelect: function (e) {

                },
				rowTemplate: function (dataItem) {
					var template = kendo.template(
                            '<tr data-uid="#= uid #">' +
                                    '<td><img src="images/#= kendo.toString(CatPage, "cat00000") #.jpg" onerror="this.onerror=null;this.src=\'images/cat00000.jpg\';" width=128></td>' +
                                    '<td>#= Itemnum #</td>' +
                                    '<td>#= ItemName #</td>' +
                                    '<td>#= Price #</td>' +
                                    '<td>#= CatDescription #</td>' +
                                    '</tr>'
                        );
					return template(dataItem);
				}
            };

            return new ItemsItemDg();
        }]);

}(angular));
