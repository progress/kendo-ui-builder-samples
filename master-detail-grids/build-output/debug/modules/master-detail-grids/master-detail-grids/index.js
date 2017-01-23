(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('MasterDetailGridsMasterDetailGridsCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('masterDetailGridsMasterDetailGrids');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/master-detail-grids-master-detail-grids/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['CustOrder'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "CustOrder",
                        "tableRef": "eCustomer"
            },
            "pageSize": 5
}
);
                $scope._$ds['CustOrder'].bind('error', errorHandler);
            
                $scope._$ds['CustOrderDetail'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "CustOrder",
                        "tableRef": "eOrder"
            },
            "pageSize": 10
}
);
                $scope._$ds['CustOrderDetail'].bind('error', errorHandler);
            

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

            
               $scope._$viewModels['CustOrderModel'] = $injector.get('dsService').createPristineModel($scope._$ds['CustOrder']);
            
               $scope._$viewModels['CustOrderDetailModel'] = $injector.get('dsService').createPristineModel($scope._$ds['CustOrderDetail']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['gridMaster'] = {
    widget: null,
    options: {
        pageable: {
            refresh: true
        },
        
        editable: 'none',
        
        
        selectable: "row",
        
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
        dataSource: $scope._$ds['CustOrder'] 
    },
    events: {
        onRowSelect: function(e) {
        
            $scope.factory['rowSelectHandler'](e);
        
        },
        onDataBound: function(e) {
        
            $scope.factory['dataBoundHandler'](e);
        
        }
    }
};
            
            $scope['customhtml0'] = {
    options: {
        html: "&lt;hr /&gt;"
    }
};
            
            $scope['gridDetails'] = {
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
                        "field": "OrderNum",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "OrderDate",
                        "title": "",
                        "format": "{0:MM/dd/yyyy}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Carrier",
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
                        "field": "OrderStatus",
                        "title": "",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            }
]
,
        dataSource: $scope._$ds['CustOrderDetail'] 
    },
    events: {
        onRowSelect: function(e) {
        
        },
        onDataBound: function(e) {
        
        }
    }
};
            

            $scope.$on('$destroy', function() {
                
                $scope._$ds['CustOrder'].unbind('error', errorHandler);
                
                $scope._$ds['CustOrderDetail'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
