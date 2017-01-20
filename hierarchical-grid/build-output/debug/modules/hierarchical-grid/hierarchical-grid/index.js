(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('HierarchicalGridHierarchicalGridCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('hierarchicalGridHierarchicalGrid');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/hierarchical-grid-hierarchical-grid/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['customer'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "CustOrder",
                        "tableRef": "eCustomer"
            },
            "pageSize": 30
}
);
                $scope._$ds['customer'].bind('error', errorHandler);
            
                $scope._$ds['order'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "CustOrder",
                        "tableRef": "eOrder"
            },
            "pageSize": 10
}
);
                $scope._$ds['order'].bind('error', errorHandler);
            

            function errorHandler(e) {
                var transport = e.sender.transport;
                var tableRef = transport.tableRef;
                var jsdo = transport.jsdo;
                var table = tableRef ? jsdo[tableRef] : jsdo;
                var errors = table.getErrors();
                var message = e.errorThrown.message;

                message += "<ul>";

                for (var i = 0; i < errors.length; i++) {
                    message += '<li>' + errors[i].error + '</li>';
                }

                message += "</ul>";

                $scope.$emit('notification', { type: 'error', message: message});
            }

            
               $scope._$viewModels['customerModel'] = $injector.get('dsService').createPristineModel($scope._$ds['customer']);
            
               $scope._$viewModels['orderModel'] = $injector.get('dsService').createPristineModel($scope._$ds['order']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['grid'] = {
    widget: null,
    options: {
        pageable: {
            refresh: true
        },
        
        editable: 'none',
        
        filterable: false,
        groupable: false,
        resizable: false,
        reorderable: false,
        sortable: false,
        columns: [
            {
                        "field": "CustNum",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Name",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Address",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Phone",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "SalesRep",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Balance",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "State",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            }
]
,
        dataSource: $scope._$ds['customer'] 
    },
    events: {
        onRowSelect: function(e) {
        
        },
        onDataBound: function(e) {
        
        }
    }
};
            

            $scope.$on('$destroy', function() {
                
                $scope._$ds['customer'].unbind('error', errorHandler);
                
                $scope._$ds['order'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
