(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('Module1CustomerViewCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('module1CustomerView');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/Module1-CustomerView/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['CustomerDS'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Customer",
                        "countFnName": "count"
            },
            "pageSize": 10,
            "serverPaging": true,
            "serverFiltering": true,
            "serverSorting": true
}
);
                $scope._$ds['CustomerDS'].bind('error', errorHandler);
            
                $scope._$ds['SalesrepDS'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Salesrep"
            },
            "pageSize": 20
}
);
                $scope._$ds['SalesrepDS'].bind('error', errorHandler);
            

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

            
               $scope._$viewModels['CustomerDSModel'] = $injector.get('dsService').createPristineModel($scope._$ds['CustomerDS']);
            
               $scope._$viewModels['SalesrepDSModel'] = $injector.get('dsService').createPristineModel($scope._$ds['SalesrepDS']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['grid0'] = {
    widget: null,
    options: {
        pageable: {
            refresh: true
        },
        
        editable: 'none',
        
        
        selectable: "row",
        
        filterable: true,
        groupable: false,
        resizable: false,
        reorderable: false,
        sortable: true,
        columns: [
            {
                        "field": "CustNum",
                        "title": "CustNum",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
            },
            {
                        "field": "Name",
                        "title": "Name",
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
            }
]
,
        dataSource: $scope._$ds['CustomerDS'] 
    },
    events: {
        onRowSelect: function(e) {
        
            $scope.factory['onRowSelect'](e);
        
        },
        onDataBound: function(e) {
        
            $scope.factory['onDataBound'](e);
        
        }
    }
};
            
            $scope['toolbar0'] = {
    widget: null,
    options: {
        resizable: true,
        items: [
            
                {
                    
                    id: 'btnNew', 
                    
                    type: 'button',
                    text: 'New',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'btnSave', 
                    
                    type: 'button',
                    text: 'Save',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'btnDelete', 
                    
                    type: 'button',
                    text: 'Delete',
                    togglable: false
                } 
            
        ]
    },
    events: {
        onClick: function(e){
            
                $scope.factory['onClickToolbar'](e);
            
        }, onToggle: function(e){
            
        }
    }
};
            
            $scope['label0'] = { };
            
            $scope['integertextbox0'] = {
    widget: null,
    options: {
        downArrowText: "",
        format: "n0",
        decimals: 0,
        placeholder: "",
    
    
    
    
         step: 1, 
     
    upArrowText : ""
    }, 
    events: {
        onChange: function(e) {
        
        },
    },
    validation: {
        required: false
    }
};
            
            $scope['label1'] = { };
            
            $scope['textbox0'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label2'] = { };
            
            $scope['salesreps'] = {
    widget: null,
    options: {
       dataSource: $scope._$ds['SalesrepDS'],  
       dataTextField: "RepName",
       dataValueField: "SalesRep",
       valuePrimitive: false,
       filter: "none"
    },
    events: {
        onChange: function(e) {
            
        },
        onSelect: function(e) {
            
        },
        onFilter: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label4'] = { };
            
            $scope['phonetextbox0'] = {
    widget: null,
    options: {
     
        mask: "(999) 000-0000",
    
        value: ""
    },
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label6'] = { };
            
            $scope['currencytextbox0'] = {
    widget: null,
    options: {
        downArrowText: "",
        format: "c",
        placeholder: "",
    
    
    
    
    
        step: 500,
    
    upArrowText : ""
    },
    events: {
        onChange: function(e) {
        
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label9'] = { };
            
            $scope['textarea0'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label3'] = { };
            
            $scope['textbox1'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label7'] = { };
            
            $scope['customhtml0'] = {
    options: {
        html: "&lt;div&gt;&lt;/div&gt;"
    }
};
            

            $scope.$on('$destroy', function() {
                
                $scope._$ds['CustomerDS'].unbind('error', errorHandler);
                
                $scope._$ds['SalesrepDS'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
