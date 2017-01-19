(function(angular){

    'use strict';

    
    

    angular.module('views')
        .controller('CustomersCustomerDGCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope.factory = $injector.get('customersCustomerDg');
            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            $scope._$ds = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Customer"
            },
            "pageSize": 10
}
);

            $scope._$ds.bind('error', errorHandler);

            $scope.model = {
    title: 'Customers',
    options: {
        pageable: {
            pageSize: 10,
            refresh: true
        },
        selectable: true,
        filterable: false,
        groupable: false,
        resizable: false,
        reorderable: false,
        sortable: false,
        columns: [
            {
                        "field": "CustNum",
                        "title": "CustNum",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Name",
                        "title": "Name",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "SalesRep",
                        "title": "SalesRep",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            }
]
,
        dataSource: $scope._$ds,
        rowTemplate: function(dataItem) {
            return $injector.get('customersCustomerDg')['rowTemplate'](dataItem);
        } 
    },
    customSections: {
        top:  'extensions/html/Customers-CustomerDG/topSection.html',
        middle: 'extensions/html/Customers-CustomerDG/middleSection.html',
        bottom: 'extensions/html/Customers-CustomerDG/bottomSection.html'
    },
    events: {
        onRowSelect: function(e) {
            
                 $scope.factory['onRowSelect'](e);
            
        }
    }
};

            $scope.$on('$destroy', function() {
                $scope._$ds.unbind('error', errorHandler);
            });

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
        }]);
})(angular);
