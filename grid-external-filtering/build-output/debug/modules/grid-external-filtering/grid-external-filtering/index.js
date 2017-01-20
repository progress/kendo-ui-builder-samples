(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('GridExternalFilteringGridExternalFilteringCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('gridExternalFilteringGridExternalFiltering');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/grid-external-filtering-grid-external-filtering/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['customerDs'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Customer"
            },
            "pageSize": 20
}
);
                $scope._$ds['customerDs'].bind('error', errorHandler);
            

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

            
               $scope._$viewModels['customerDsModel'] = $injector.get('dsService').createPristineModel($scope._$ds['customerDs']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['label0'] = { };
            
            $scope['searchTb'] = {
    events: {
        onChange: function(e) {
            
                 $scope.factory['changeHandler'](e);
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['grid0'] = {
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
                        "field": "Name",
                        "title": "Name",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Address",
                        "title": "Address",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Phone",
                        "title": "Phone",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "SalesRep",
                        "title": "SalesRep",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "State",
                        "title": "State",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Country",
                        "title": "Country",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            }
]
,
        dataSource: $scope._$ds['customerDs'] 
    },
    events: {
        onRowSelect: function(e) {
        
        },
        onDataBound: function(e) {
        
        }
    }
};
            

            $scope.$on('$destroy', function() {
                
                $scope._$ds['customerDs'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
