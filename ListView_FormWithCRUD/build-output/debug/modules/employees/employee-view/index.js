(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('EmployeesEmployeeViewCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('employeesEmployeeView');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/Employees-EmployeeView/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['EmployeeDS'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Employees"
            },
            "pageSize": 10
}
);
                $scope._$ds['EmployeeDS'].bind('error', errorHandler);
            

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

            
               $scope._$viewModels['EmployeeDSModel'] = $injector.get('dsService').createPristineModel($scope._$ds['EmployeeDS']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['EmployeeLV'] = {
    widget: null,
    options: {
        
        selectable: "Single",
        
        dataSource: $scope._$ds['EmployeeDS'],
        template: function(dataItem) {
            return kendo.template(angular.element("#ListViewTemplateID").html())(dataItem);
        }
    },
    events: {
        onChange: function(e) {
            
            $scope.factory['OnSelect'](e);
            
        },
        onCancel: function(e) {
            
        },
        onDataBound: function(e) {
            
            $scope.factory['OnDataBound'](e);
            
        },
        onEdit: function(e) {
            
        },
        onRemove: function(e) {
            
        },
        onSave: function(e) {
            
        }
    }
};
            
            $scope['UpdToolBar'] = {
    widget: null,
    options: {
        resizable: true,
        items: [
            
                {
                    
                    id: 'NewBtn', 
                    
                    type: 'button',
                    text: 'New',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'RemoveBtn', 
                    
                    type: 'button',
                    text: 'Remove',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'Sep1', 
                    
                    type: 'separator',
                    text: '',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'SaveBtn', 
                    
                    type: 'button',
                    text: 'Save',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'CancelBtn', 
                    
                    type: 'button',
                    text: 'Cancel',
                    togglable: false
                } 
            
        ]
    },
    events: {
        onClick: function(e){
            
                $scope.factory['OnUpdToolbarClick'](e);
            
        }, onToggle: function(e){
            
        }
    }
};
            
            $scope['customhtml0'] = {
    options: {
        html: "&lt;hr&gt;"
    }
};
            
            $scope['EmpNumLbl'] = { };
            
            $scope['EmpNumTB'] = {};
            
            $scope['SickDaysLbl'] = { };
            
            $scope['SickDaysTB'] = {
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
            
            $scope['FirstNameLbl'] = { };
            
            $scope['FirstNameTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['VacDaysLbl'] = { };
            
            $scope['VacDaysTB'] = {
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
            
            $scope['LastNameLbl'] = { };
            
            $scope['LastNameTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['WorkPhoneTBLabel'] = { };
            
            $scope['WorkPhoneTB'] = {
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
            
            $scope['AddressLbl'] = { };
            
            $scope['AddressTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['BirthdateDPL'] = { };
            
            $scope['BirthdateDP'] = {
    widget: null,
    options: {
        min: new Date("1899-12-31T22:00:00.000Z"),
        max: new Date("2099-12-30T22:00:00.000Z"),
        format: "M/d/yyyy"
    },
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['CityTBLabel'] = { };
            
            $scope['CityTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['PostalCodeLbl'] = { };
            
            $scope['PostalCodeTB'] = {
    widget: null,
    options: {
    
    
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
            

            $scope.$on('$destroy', function() {
                
                $scope._$ds['EmployeeDS'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
