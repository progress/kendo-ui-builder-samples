(function(angular, kendo){

    'use strict';

    
    

    angular.module('views')
        .controller('ApplicantsApplicantViewCtrl', ['$scope', '$injector', 'onInit',function ($scope, $injector, onInit) {
            $scope._$ds = {};
            $scope._$viewModels = {};
            $scope.factory = $injector.get('applicantsApplicantView');
            $scope._$domReady = false;

            $scope._$customSections = {
                top:  'extensions/html/Applicants-ApplicantView/topSection.html'
            };

            $scope.$on('$includeContentLoaded', function() {
                $scope._$domReady = true;
            });

            $scope.$on('$includeContentError', function() {
                $scope._$domReady = true;
                console.info('Error loading custom section', $scope._$customSections.top);
            });

            
                $scope._$ds['ApplicantDS'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Applicant",
                        "countFnName": "count"
            },
            "pageSize": 5,
            "serverPaging": true,
            "serverFiltering": true,
            "serverSorting": true
}
);
                $scope._$ds['ApplicantDS'].bind('error', errorHandler);
            
                $scope._$ds['ViewDataSource1'] = new kendo.data.DataSource({
            "type": "jsdo",
            "transport": {
                        "jsdo": "Applicant",
                        "countFnName": "count"
            },
            "pageSize": 10,
            "serverPaging": true,
            "serverFiltering": true,
            "serverSorting": true
}
);
                $scope._$ds['ViewDataSource1'].bind('error', errorHandler);
            

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

            
               $scope._$viewModels['ApplicantDSModel'] = $injector.get('dsService').createPristineModel($scope._$ds['ApplicantDS']);
            
               $scope._$viewModels['ViewDataSource1Model'] = $injector.get('dsService').createPristineModel($scope._$ds['ViewDataSource1']);
            

            
            $scope.$on('$viewContentLoaded', function(e) {
                $scope.factory['onShow'](e.currentScope, onInit);
            });
            

            
            $scope['NavToolbar'] = {
    widget: null,
    options: {
        resizable: true,
        items: [
            
                {
                    
                    id: 'FirstBtn', 
                    
                    type: 'button',
                    text: 'First',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'PrevBtn', 
                    
                    type: 'button',
                    text: 'Prev',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'NextBtn', 
                    
                    type: 'button',
                    text: 'Next',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'LastBtn', 
                    
                    type: 'button',
                    text: 'Last',
                    togglable: false
                } 
            
        ]
    },
    events: {
        onClick: function(e){
            
                $scope.factory['onNavToolbarClick'](e);
            
        }, onToggle: function(e){
            
        }
    }
};
            
            $scope['UpdToolbar'] = {
    widget: null,
    options: {
        resizable: true,
        items: [
            
                {
                    
                    id: 'CreateBtn', 
                    
                    type: 'button',
                    text: 'Create',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'RemoveBtn', 
                    
                    type: 'button',
                    text: 'Remove',
                    togglable: false
                }  , 
            
                {
                    
                    id: 'Spacer1', 
                    
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
                    
                    id: 'Sep1', 
                    
                    type: 'separator',
                    text: '',
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
            
                $scope.factory['onCRUDToolbarClick'](e);
            
        }, onToggle: function(e){
            
        }
    }
};
            
            $scope['ApplicantIdLbl'] = { };
            
            $scope['ApplicantIdTB'] = {
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
            
            $scope['UserNameLbl'] = { };
            
            $scope['UserNameTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['NameLbl'] = { };
            
            $scope['NameTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['PasswordLbl'] = { };
            
            $scope['PasswordTB'] = {
    events: {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['EmployeedCBLbl'] = { };
            
            $scope['EmployedCB'] = {
    
    model: $scope._$viewModels.ApplicantDSModel.Employed,
    
    events: {
        onChange: function(e) {
            
        }
    }
};
            
            $scope['AgeLbl'] = { };
            
            $scope['AgeCB'] = {
    widget: null,
    options: {
       dataSource: $scope._$ds['ViewDataSource1'],  
       dataTextField: "",
       dataValueField: "",
       valuePrimitive: false,
       filter: "none"
    },
    events: {
        onChange: function(e) {
            
                 $scope.factory['onChangeAge'](e);
            
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
            
            $scope['EmailLbl'] = { };
            
            $scope['EmailTB'] = {
    "options": {
        "title": "",
        "defaultValue": "",
        "placeholder": "john.doe@example.net",
        "debounce" : 0
    }, 
    "events": {
        onChange: function(e) {
            
        }
    },
    validation: {
        required: false
    }
};
            
            $scope['EmployedLbl'] = { };
            
            $scope['EmployedRadio'] = {
    events: {
        onChange: function(e) {
            
        }
    }
};
            
            $scope['ExpectedHikeLbl'] = { };
            
            $scope['PayHikeCurrencyTB'] = {
    widget: null,
    options: {
        downArrowText: "",
        format: "c",
        placeholder: "",
    
    
    
    
    
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
            
            $scope['PhoneLbl'] = { };
            
            $scope['PhoneTB'] = {
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
            
            $scope['ResumeLbl'] = { };
            
            $scope['ResumeEditor'] = {
    widget: null,
    options: {
        
        
        encoded: true
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
                
                $scope._$ds['ApplicantDS'].unbind('error', errorHandler);
                
                $scope._$ds['ViewDataSource1'].unbind('error', errorHandler);
                
            });
        }]);
})(angular, kendo);
