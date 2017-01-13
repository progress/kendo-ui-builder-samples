(function(angular){

    'use strict';

    
    

    angular.module('views')
        .controller('ItemsItemDGCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope.factory = $injector.get('itemsItemDg');
            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            $scope._$ds = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Item"
            },
            "pageSize": 15
}
);

            $scope._$ds.bind('error', errorHandler);

            $scope.model = {
    title: 'Items',
    options: {
        pageable: {
            pageSize: 15,
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
                        "field": "CatPage",
                        "title": "Item",
                        "filterable": true,
                        "sortable": true,
                        "encoded": true
            },
            {
                        "field": "Itemnum",
                        "title": "Item Num",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "ItemName",
                        "title": "Item Name",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Price",
                        "title": "Price",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "CatDescription",
                        "title": "Cat-Description",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            }
]
,
        dataSource: $scope._$ds,
        rowTemplate: function(dataItem) {
            return $injector.get('itemsItemDg')['rowTemplate'](dataItem);
        } 
    },
    customSections: {
        top:  'extensions/html/Items-ItemDG/topSection.html',
        middle: 'extensions/html/Items-ItemDG/middleSection.html',
        bottom: 'extensions/html/Items-ItemDG/bottomSection.html'
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
