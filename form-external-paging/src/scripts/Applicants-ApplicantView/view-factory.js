/*global angular, kendo, console, alert*/
/*jslint nomen: true */
(function (angular) {
    "use strict";
    angular
        .module('viewFactories')
        .factory('applicantsApplicantView', ['$q', 'dsService', function ($q, dsService) {
            
            function ApplicantsApplicantView() {
                this.scope = null;
                // Used for progress indicator
                this.body = angular.element('body');
            }

            ApplicantsApplicantView.prototype = {
                /*  The resolve method could return arbitrary data, 
                    which will be available in the "viewShowHandler" and "viewHideHandler" handler as the customData argument */
                onInit: function ($stateParams) {
                    return $q(function (resolve, reject) {
                        resolve({});
                    });
                },
                
                /* "customData" is the data return by the viewInitHandler handler*/
                onShow: function ($scope, customData) {
                    var that = this,
                        applicantDS;
                    
                    /* Modes for appMode property */
                    this.NONE = 0;
                    this.CREATE = 1;
                    this.UPDATE = 2;
                    this.DELETE = 3;
                        
                    this.scope = $scope;
                    applicantDS = this.scope._$ds.ApplicantDS;
                    // curRowIndex is a 0-based index of current row in current view/page
                    this.curRowIndex = 0;  // Init to first row in first page
                    
					// Call SetUpAgeDataSource() when control is available.
					// Use of watch() is a common Angular approach 
					// to wait for availability of the control.
					// onShow - it is too soon
					// kendoWidgetCreated - you need to identify the control
					// success of read() - control may still not be available
                   
                    $scope.$watch(function () {
                        return angular.element("#AgeCB").data("kendoComboBox");
                    }, function (newValue, oldValue) {
                        if (newValue) {
							that.setUpAgeDataSource();
                        }
                    });
                    
					// Show progress indicator
					kendo.ui.progress(this.body, true);

                    applicantDS.bind('change', function (e) {
                        // For form, datasource pagesize is set to 1, so view returns single row
                        // in current page
                        var view = applicantDS.view(),
                            that = this;
                        
                        // Delete operation handles updating of model in sync promises
                        if (this.appMode !== this.DELETE && view.length) {
                            // Set it to last row in current view
                            if (this.curRowIndex === -1) {
                                this.curRowIndex = view.length - 1;
                            }
                        
                            $scope.$applyAsync(function () {
                                that.updateDataViewModel(view[that.curRowIndex]);
                                
                                if (that.appMode === that.CREATE) {
                                    that.enableButtons(false, true);
                                } else {
                                    // Once change event fires, retrieval of new page is
                                    // completed, so user can continue
                                    that.enableButtons(true, true);
                                }
                               
                            }.bind(this));
                        }
                    }.bind(this));
                    
					applicantDS.read().done(function () {
                        var applicantDS = that.scope._$ds.ApplicantDS,
                            view = applicantDS.view();
                            
                        kendo.ui.progress(that.body, false);
                        that.appMode = that.NONE;
                        that.updateDataViewModel(view[that.curRowIndex]);
                    });
                    
                },
                
                // Updates the model from speciified DataSource row
                updateDataViewModel: function (curRow) {
                    this.scope._$viewModels.ApplicantDSModel = kendo.proxyModelSetters(curRow);
                                
                    // Need to manually update controls with data from newly populated model
                    this.updateNonModelControls();
                },
                
                // Updates the corresponding DataSource row from model 
                updateDataSourceRow: function (model) {
                    var i,
                        applicantDS = this.scope._$ds.ApplicantDS,
                        schema = applicantDS.transport.jsdo.getSchema(),
                        dataItem = applicantDS.get(model.id);
                    
                    // Manually synchronize model with datasource.
                    // Using schema instead of model, else issue overwriting dirty property
                    for (i = 0; i < schema.length; i += 1) {
                        dataItem.set(schema[i].name, model[schema[i].name]);
                    }
                },
                
				// Updates the combobox control with data from model manually,
                // because a local datasource is used.
                updateNonModelControls: function () {
                    var applicantModel = this.scope._$viewModels.ApplicantDSModel,
                        ageComboBox = angular.element("#AgeCB").data("kendoComboBox");
                    
                    ageComboBox.value(applicantModel.Age);
                },
                
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function (customData) {
                },
                
                // OnCreateClick() adds a new row to the datasource.  
                // The add() returns its corresponding dataItem with default values.  
                // Once the 'Save' btn is selected, the create operation will then
                // be sent to the backend.
                onCreateClick: function () {
                    var applicantDS = this.scope._$ds.ApplicantDS;
                    
                    this.appMode = this.CREATE;
                    
                    // Add new row to the datasource (add fires change event).
                    // New row will be placed at end of current view.
                    // Also save curRowIndex, in case user cancels create, so we can 
                    // reset focused row 
                    this.savedCurRowIndex = this.curRowIndex;
                    this.curRowIndex = applicantDS.view().length;
                    applicantDS.add({});
                },
                
                onRemoveClick: function () {
                    var that = this;
                    
                    function removeRow() {
                        var applicantDS = that.scope._$ds.ApplicantDS,
                            applicantModel = that.scope._$viewModels.ApplicantDSModel,
                            promise;

                        that.appMode = that.DELETE;
                        applicantDS.remove(applicantModel);

                        // Now save changes to the backend
                        promise = applicantDS.sync();
                        promise.done(function (xhr) {
                            var applicantDS = that.scope._$ds.ApplicantDS,
                                page = applicantDS.page(),
                                lastPage = applicantDS.totalPages(),
                                view = applicantDS.view();
                            
                            that.appMode = that.NONE;
                            
                            // Check if deleted row was only row in last page
                            if (page > lastPage) {
                                that.curRowIndex = -1;
                                page = lastPage;
                            } else if (that.curRowIndex === view.length && page === lastPage) {
                                // If deleted last row on last page, update curRowIndex
                                that.curRowIndex -= 1;
                            }
                              
                            that.enableButtons(false, false);
                            // Reget the page now
                            applicantDS.page(page);
                        });
                        promise.fail(function (xhr) {
                            var applicantDS = that.scope._$ds.ApplicantDS,
                                errors,
                                i;

                            that.appMode = that.NONE;
                            applicantDS.cancelChanges();
                            
                            // Display errors
                            // Default error handling already shows errors in an error notification                            
//                            errors = applicantDS.transport.jsdo.getErrors();
//                            for (i = 0; i < errors.length; i += 1) {
//                                alert("Delete Error: " + errors[i].error);
//                            }
                        }); // end promise.fail
                    }
                    
				    this.scope.$emit('dialog', {
				        title: "Are you sure you want to delete record?",
				        hint:  "The record will be permanently removed.",
                        
				        okButton: {
				            handler: removeRow
				        }
				    });
                },
                
                // OnCancelClick() cancels a pending create or update operation.
                onCancelClick: function ($scope, customData) {
                    var applicantModel = this.scope._$viewModels.ApplicantDSModel,
                        applicantDS = this.scope._$ds.ApplicantDS;
                    
                    // The change to datasource forces change event which updates model
                    if (applicantDS.hasChanges()) {
                        if (this.appMode === this.CREATE) {
                            // Remove record from dataSource. (remove fires change event)
                            // Created rows are added at end of current page, so reset focused row
                            this.curRowIndex = this.savedCurRowIndex;
                            this.appMode = this.NONE;
                            this.enableButtons(false, false);
                            applicantDS.remove(applicantModel);
                        } else {
                            applicantDS.cancelChanges();
                        }
                    }
                },
                 
                // This function calls the datasource.sync()  to send the 
                // update or create operation to backend service.
                // For created rows, it first must synchronize model with datasource
                onSaveClick: function () {
                    var that = this,
                        promise,
                        applicantModel = this.scope._$viewModels.ApplicantDSModel,
                        applicantDS = this.scope._$ds.ApplicantDS;
                    
                    if (this.appMode === this.CREATE) {
                        // Manually synchronize model with datasource.
                        this.updateDataSourceRow(applicantModel);
                    }
                   
                    if (applicantDS.hasChanges()) {
                        this.enableButtons(false, false);
                        promise = applicantDS.sync();
                        promise.done(function () {
                            that.enableButtons(true, true);
                            that.appMode = that.NONE;
                        });
                        promise.fail(function (xhr) {
                            var applicantDS = that.scope._$ds.ApplicantDS,
                                errors,
                                i;
                            
                            that.enableButtons(false, true);
                            
                            // Display errors
                            // Default error handling already shows errors in an error notification
//                            errors = applicantDS.transport.jsdo.getErrors();
//                            for (i = 0; i < errors.length; i += 1) {
//                                if (i === 0) {
//                                    alert(errors[i].error);
//                                } else {
//                                    console.log(errors[i].error);
//                                }
//                            }
                            
                            applicantDS.cancelChanges();
                        }); // end promise.fail
                    }
                },
                 
                
                // When bEnable is false, all buttons except for the Save and Cancel
                //buttons should be disabled. In this scenario, user, for example,
                // just selected "Create", so must either hit "Save" to actually
                //create the record or "Cancel" to cancel add.
                // (We'll just leave Save and Cancel buttons as always enabled)
                enableButtons: function (bEnable, bSaveCancel) {
                    var navToolBar = angular.element("#NavToolbar").data("kendoToolBar"),
                        updToolBar = angular.element("#UpdToolbar").data("kendoToolBar");
                           
                    if (navToolBar && updToolBar) {
                        navToolBar.enable("#FirstBtn", bEnable);
                        navToolBar.enable("#PrevBtn", bEnable);
                        navToolBar.enable("#NextBtn", bEnable);
                        navToolBar.enable("#LastBtn", bEnable);
                    
                        updToolBar.enable("#CreateBtn", bEnable);
                        updToolBar.enable("#RemoveBtn", bEnable);

                        updToolBar.enable("#SaveBtn", bSaveCancel);
                        updToolBar.enable("#CancelBtn", bSaveCancel);
                    }
                },
                
				onNavToolbarClick: function (e) {
					var that = this,
                        applicantDS = this.scope._$ds.ApplicantDS;
                    
                    if (applicantDS.hasChanges()) {
						this.scope.$emit('dialog', {
							title: "Changes detected",
							hint: "Are you sure you want to navigate without saving changes?",
							okButton: {
								handler: function () {
                                    that.scope._$ds.ApplicantDS.cancelChanges();
									that.navigateTo(e.id);
								}
							}
						});
					} else {
						this.navigateTo(e.id);
					}
				},
				
                
                
                navigateTo: function (id) {
                    var scope = this.scope,
                        applicantDS = this.scope._$ds.ApplicantDS,
                        page = applicantDS.page(),
                        view = applicantDS.view();
                    
                    // If this.curRowIndex == -1, that means that the change event has not occurred yet 
                    // for the previous navigation click. So we have to ignore this event until the change
                    // event fires.
                    // An alternative approach to dealing with this async issue is to disable the navigation
                    // buttons until the change event fires, but that causes a flickering of the buttons,
                    // so the calls to this.enableButtons(false, false); below are commented out
                    if (this.curRowIndex === -1) {
                        return;
                    }

					switch (id) {
					case "FirstBtn":
                        // First check if on first row. If so, nothing to do
                        if (!(this.curRowIndex === 0 && page === 1)) {
                            if (page !== 1) {
                                this.curRowIndex = 0;
                                //this.enableButtons(false, false);
                                applicantDS.page(1);
                            } else {
                                this.curRowIndex = 0;
                                this.updateDataViewModel(view[this.curRowIndex]);
                            }
                        }
						break;
					case "PrevBtn":
                        // First check if on first row. If so, nothing to do
                        if (!(this.curRowIndex === 0 && page === 1)) {
                            // Check if on first row in current view. If so, get previous page
                            if (this.curRowIndex === 0) {
                                // curRowIndex will be determined in change event (page() fires change event)
                                this.curRowIndex = -1;
                                //this.enableButtons(false, false);
                                applicantDS.page(page - 1);
                            } else {
                                // Staying on same page, just navigate to previous row
                                this.curRowIndex -= 1;
                                this.updateDataViewModel(view[this.curRowIndex]);
                            }
                        }
						break;
					case "NextBtn":
                        // First check if on last row. If so, nothing to do
                        if (!(this.curRowIndex === (view.length - 1) && page === applicantDS.totalPages())) {
                            // Check if on last row in current view. If so, get next page
                            if (this.curRowIndex === (view.length - 1)) {
                                this.curRowIndex = 0;
                                //this.enableButtons(false, false);
                                applicantDS.page(page + 1);
                            } else {
                                // Staying on same page, just navigate to next row
                                this.curRowIndex += 1;
                                this.updateDataViewModel(view[this.curRowIndex]);
                            }
                        }
						break;
					case "LastBtn":
                        // First check if on last row. If so, nothing to do
                        if (!(this.curRowIndex === (view.length - 1) && page === applicantDS.totalPages())) {
                            if (page !== applicantDS.totalPages()) {
                                // curRowIndex will be determined in change event (page() fires change event)
                                this.curRowIndex = -1;
                                //this.enableButtons(false, false);
                                applicantDS.page(applicantDS.totalPages());
                            } else {
                                this.curRowIndex = view.length - 1;
                                this.updateDataViewModel(view[this.curRowIndex]);
                            }
                        }
						break;
					}
				},
                
				onCRUDToolbarClick: function (e) {
                    var applicantDS = this.scope._$ds.ApplicantDS,
                        data = applicantDS.data();
                    
					switch (e.id) {
					case "CreateBtn":
						this.onCreateClick();
						break;
                        
					case "RemoveBtn":
                        this.onRemoveClick();
						break;
                        
					case "SaveBtn":
                        this.onSaveClick();
						break;
                        
					case "CancelBtn":
						this.onCancelClick();
						break;

					}
				},
                
                // For the age comboBox, we are creating a local datasource, and
                // associating it with the comboBox control
                setUpAgeDataSource: function (view, curRow) {
                    var ageComboBox = angular.element("#AgeCB").data("kendoComboBox"),
                        dataSource,
                        that = this;
                       
                    if (ageComboBox) {
                        dataSource = new kendo.data.DataSource(
                            {data : [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]}
                        );
                        ageComboBox.setDataSource(dataSource);
                    } else {
                        console.log("ERROR in SetUpAgeDataSource: AgeCB is not available");
                    }
                },
                
                onChangeAge: function ($scope, customData) {
                    var applicantModel = this.scope._$viewModels.ApplicantDSModel,
                        age = parseInt($scope.sender.value());
                        
                    if (age) {
                        applicantModel.Age = age;
                    }
                }
            };

            return new ApplicantsApplicantView();
        }]);

}(angular));
