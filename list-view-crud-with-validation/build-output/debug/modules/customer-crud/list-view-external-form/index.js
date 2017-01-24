(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('CustomerCRUDListViewExternalFormCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('customerCrudListViewExternalForm');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/CustomerCRUD-list-view-external-form/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['CustomerDs'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Customer"
            },
            "pageSize": 5
}
);
                $scope._$ds['CustomerDs'].bind('error', errorHandler);
            

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

            
               $scope._$viewModels['CustomerDsModel'] = $injector.get('dsService').createPristineModel($scope._$ds['CustomerDs']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['listview'] = {
    widget: null,
    options: {
        
        selectable: "Single",
        
        dataSource: $scope._$ds['CustomerDs'],
        template: function(dataItem) {
            return kendo.template(angular.element("#customerTemplate").html())(dataItem);
        }
    },
    events: {
        onChange: function(e) {
            
        },
        onCancel: function(e) {
            
        },
        onDataBound: function(e) {
            
            $scope.factory['dataBoundHandler'](e);
            
        },
        onEdit: function(e) {
            
        },
        onRemove: function(e) {
            
        },
        onSave: function(e) {
            
        }
    }
};
            
            $scope['customhtml1'] = {
    options: {
        html: "&lt;hr&gt;"
    }
};
            
            $scope['newButton'] = {
    widget: null,
    options: {
        content: "New",
        primary: false
    }, 
    events: {
        onClick: function(e) {
        
                $scope.factory['newHandler'](e);
        
        }
    }
};
            
            $scope['save'] = {
    widget: null,
    options: {
        content: "Save",
        primary: false
    }, 
    events: {
        onClick: function(e) {
        
                $scope.factory['saveHandler'](e);
        
        }
    }
};
            
            $scope['delete'] = {
    widget: null,
    options: {
        content: "Delete",
        primary: false
    }, 
    events: {
        onClick: function(e) {
        
                $scope.factory['deleteHandler'](e);
        
        }
    }
};
            
            $scope['cancel'] = {
    widget: null,
    options: {
        content: "Cancel",
        primary: false
    }, 
    events: {
        onClick: function(e) {
        
                $scope.factory['cancelHandler'](e);
        
        }
    }
};
            
            $scope['customhtml0'] = {
    options: {
        html: "&lt;hr&gt;"
    }
};
            
            $scope['label0'] = { };
            
            $scope['custNum'] = {
    widget: null,
    options: {
        downArrowText: "",
        format: "n0",
        decimals: 0,
        placeholder: "Enter Cust Num",
    
    
    
    
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
            
            $scope['name'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label2'] = { };
            
            $scope['address'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label3'] = { };
            
            $scope['phone'] = {
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
            
            $scope['label4'] = { };
            
            $scope['salesRep'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label5'] = { };
            
            $scope['balance'] = {
    widget: null,
    options: {
        downArrowText: "",
        placeholder: "Enter Balance",
    
    
    
    
    
    
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
            
            $scope['label6'] = { };
            
            $scope['state'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['label7'] = { };
            
            $scope['country'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            

            $scope.$on('$destroy', function() {
                
                $scope._$ds['CustomerDs'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
