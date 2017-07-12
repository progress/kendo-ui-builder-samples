import BaseController from './controller.js'

class ApplicantsApplicantViewCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
		
		this.body = angular.element('body');		
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
	onShow($scope) {
		var that = this,
			applicantDS;
			
		this.scope = $scope;
		applicantDS = this.$ds.ApplicantDS;
		
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
				that.updateNonModelControls();
			}
		});
		
		// Show progress indicator
		kendo.ui.progress(this.body, true);
		
		applicantDS.bind('change', function (e) {
			// For form, datasource pagesize is set to 1, so view returns single row
			// in current page
			var view = applicantDS.view(),
				that = this;
			if (view.length) {
				$scope.$applyAsync(function () {
					//console.log("In $applyAsync, got change " + view[0].Name);
					
					// On change, update model with row
						that.$viewModels.ApplicantDSModel = kendo.proxyModelSetters(view[0]);
					
					// Need to manually update controls with data from newly populated model
					that.updateNonModelControls();
				}.bind(this));
			}
		}.bind(this));
		applicantDS.read().done(function () {
			kendo.ui.progress(that.body, false);
			that.addMode = false;
		});
	}
	
	// Updates the corresponding DataSource row from model 
	updateDataSourceRow(model) {
		var i,
			applicantDS = this.$ds.ApplicantDS,
			schema = applicantDS.transport.jsdo.getSchema(),
			dataItem = applicantDS.get(model.id);
		
		// Manually synchronize model with datasource.
		// Using schema instead of model, else issue overwriting dirty property
		for (i = 0; i < schema.length; i += 1) {
			dataItem.set(schema[i].name, model[schema[i].name]);
		}
	}
	
	// Updates the combobox control with data from model
	// manually, because a local datasource is used.
	updateNonModelControls() {
		var applicantModel = this.$viewModels.ApplicantDSModel,
			ageComboBox = angular.element("#AgeCB").data("kendoComboBox");
		
		// updateNonModelControls is called from a change event callback,
		// in some circumstances, the combobox might not be available
		if (ageComboBox) {
			ageComboBox.value(applicantModel.Age);
		}
	}
	
	// OnCreateClick() adds a new row to the datasource.  
	// The add() returns its corresponding dataItem with default values.  
	// Once the 'Save' btn is selected, the create operation will then
	// be sent to the backend.
	// The new record will not be in a sort position until a refresh occurs.
	// Navigation uses local paging and will not change sort order.
	onCreateClick() {
		var applicantDS = this.$ds.ApplicantDS;
		
		// Add new row to the datasource, then update the current page.
		// The add() fires the change event which updates the model with
		// current row (page).
		applicantDS.add({});
		applicantDS.page(applicantDS.totalPages());
		
		this.addMode = true;
		this.enableButtons(false, true);
	}
	
	onRemoveClick() {
		var that = this;
		
		function removeRow() {
			var applicantDS = that.$ds.ApplicantDS,
				applicantModel = that.$viewModels.ApplicantDSModel,
				promise;

			applicantDS.remove(applicantModel);

			// Now save changes to the backend
			promise = applicantDS.sync();
			promise.done(function (xhr) {
				var applicantDS = that.$ds.ApplicantDS;

				// Remove forces change event which updates
				// model, but if last row is deleted, then
				// current page needs to be updated
				if (applicantDS.page() > applicantDS.totalPages()) {
					applicantDS.page(applicantDS.totalPages());
				}
			});
			promise.fail(function (xhr) {
				var applicantDS = that.$ds.ApplicantDS,
					errors,

				errors = applicantDS.transport.jsdo.getErrors();
				for (i = 0; i < errors.length; i += 1) {
					console.log(errors[i].error);
				}
			}); // end promise.fail
		}
		
		this.scope.$emit('dialog', {
			title: "Are you sure you want to delete record?",
			hint: "The record will be permanently removed.",
			
			okButton: {
				handler: removeRow
			}
		});
	}
	
	// OnCancelClick() cancels a pending create or update operation
	onCancelClick($scope, customData) {
		var applicantModel = this.$viewModels.ApplicantDSModel,
			applicantDS = this.$ds.ApplicantDS;
		
		// The change to the datasource will force the change event
		// which will update model correctly
		if (applicantDS.hasChanges()) {
			if (this.addMode === true) {
				// Remove record just added to dataSource 
				applicantDS.remove(applicantModel);
				this.addMode = false;
				// Focus is now on last row (created rows are appended at end)
				applicantDS.page(applicantDS.totalPages());
			} else {
				applicantDS.cancelChanges();
			}
		}
		
		this.enableButtons(true, true);
	}
	 
	// This function calls the datasource.sync() function to send the 
	// update or create operation to backend service.
	// For created rows, it first must synchronize model with datasource
	onSaveClick() {
		var that = this,
			promise,
			applicantModel = this.$viewModels.ApplicantDSModel,
			applicantDS = this.$ds.ApplicantDS;
		
		if (this.addMode) {
			// Manually synchronize model with datasource.
			this.updateDataSourceRow(applicantModel);
		}
	   
		if (applicantDS.hasChanges()) {
			this.enableButtons(false, false);
			promise = applicantDS.sync();
			promise.done(function () {
				that.enableButtons(true, true);
				
				if (that.addMode === true) {
					that.addMode = false;
				}
			});
			promise.fail(function (xhr) {
				var applicantDS = that.$ds.ApplicantDS,
					errors,
					i;
				
				that.enableButtons(false, true);
				errors = applicantDS.transport.jsdo.getErrors();
				for (i = 0; i < errors.length; i += 1) {
					console.log(errors[i].error);
				}
				
				applicantDS.cancelChanges();
			}); // end promise.fail
		}
	}
	 
	
	// When bEnable is false, all buttons except for the Save and Cancel
	//buttons should be disabled. In this scenario, user, for example,
	// just selected "Create", so must either hit "Save" to actually
	//create the record or "Cancel" to cancel add.
	// (We'll just leave Save and Cancel buttons as always enabled)
	enableButtons(bEnable, bSaveCancel) {
		var navToolBar = angular.element("#NavToolbar").data("kendoToolBar"),
			updToolBar = angular.element("#UpdToolbar").data("kendoToolBar");
			   
		if (navToolBar && updToolBar) {
			navToolBar.enable("#FirstBtn", bEnable);
			navToolBar.enable("#PrevBtn", bEnable);
			navToolBar.enable("#NextBtn", bEnable);
			navToolBar.enable("#LastBtn", bEnable);
		
			updToolBar.enable("#NewBtn", bEnable);
			updToolBar.enable("#RemoveBtn", bEnable);

			updToolBar.enable("#SaveBtn", bSaveCancel);
			updToolBar.enable("#CancelBtn", bSaveCancel);
		}
	}
	
	onNavToolbarClick(e) {
		var that = this,
			applicantDS = this.$ds.ApplicantDS;
		
		if (applicantDS.hasChanges()) {
			this.scope.$emit('dialog', {
				title: "Changes detected",
				hint: "Are you sure you want to navigate without saving changes?",
				okButton: {
					handler: function () {
						that.$ds.ApplicantDS.cancelChanges();
						that.navigateTo(e.id);
					}
				}
			});
		} else {
			this.navigateTo(e.id);
		}
	}
	
	navigateTo(id) {
		var applicantDS = this.$ds.ApplicantDS,
			data = applicantDS.data(),
			scope = this.scope,
			// Note: The DataSource pageSize is 1
			currentPage = applicantDS.page();
		
		switch (id) {
		case "FirstBtn":
			if (applicantDS.totalPages() > 0) {
				applicantDS.page(1);
			}
			break;
		case "PrevBtn":
			if (currentPage > 1) {
				applicantDS.page(currentPage - 1);
			}
			break;
		case "NextBtn":
			if (currentPage < applicantDS.totalPages()) {
				applicantDS.page(currentPage + 1);
			}
			break;
		case "LastBtn":
			if (applicantDS.totalPages() > 0) {
				applicantDS.page(applicantDS.totalPages());
			}
			break;
		}
	}
	
	onCRUDToolbarClick(e) {
		var applicantDS = this.$ds.ApplicantDS,
			data = applicantDS.data();
		
		switch (e.id) {
		case "NewBtn":
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
	}
	
	// For the age comboBox, we are creating a local datasource, and
	// associating it with the comboBox control
	setUpAgeDataSource(view, curRow) {
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
	}
	
	onChangeAge($scope, customData) {
		var applicantModel = this.$viewModels.ApplicantDSModel,
			age = parseInt($scope.sender.value());
			
		if (age) {
			applicantModel.Age = age;
		}
	}

}

ApplicantsApplicantViewCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ApplicantsApplicantViewCtrl
