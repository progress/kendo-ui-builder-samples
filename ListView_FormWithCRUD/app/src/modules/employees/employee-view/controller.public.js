import BaseController from './controller.js'

class EmployeesEmployeeViewCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
	onShow($scope) {
		this.scope = $scope;
		
		this.selectedRow = 0;
		this.addMode = false;
		this.cancelOnSelect = true;
	}
	
	/*
	Alternative way to specify a List View template.
	In the designer, specify the "Template Function" property.
	ListViewTemplate: function(data) {
		var template = kendo.template("<div id='box'>#: EmpNum #  #: FirstName # #: LastName #</div>"),
		result = template(data);  //Passing the data to the template
	
		return result;
	},
	*/
	
	OnSelect(e) {
		var listView = angular.element("#EmployeeLV").data("kendoListView"),
		    empDataViewModel = this.$viewModels.EmployeeDSModel,
			empDataSrc = this.$ds.EmployeeDS;
								
		this.selectedRow = listView.select().index();
		 
		// Cancel current change when switching to a new item
		if (this.cancelOnSelect && empDataSrc.hasChanges()) {
			empDataSrc.cancelChanges();
			if (this.addMode) {
				this.EnableButtons(true, true);
			}
		}
	}
   
	// This sample assumes that this is a single-select ListView
	OnDataBound(e) {
		var listView = angular.element("#EmployeeLV").data("kendoListView"),
			items;

		if (listView) {
			items = listView.items();
			
			if (this.selectedRow >= items.length) {
				this.selectedRow = 0; // reset to first item
			}
			listView.select(items[this.selectedRow]);
		}
	}
	
	OnUpdToolbarClick(e) {
		var data = this.$ds.EmployeeDS.data();
		
		switch (e.id) {
		case "NewBtn":
			this.OnCreateClick();
			break;
			
		case "RemoveBtn":
			this.OnRemoveClick();
			break;
			
		case "SaveBtn":
			this.OnSaveClick();
			break;
			
		case "CancelBtn":
			this.OnCancelClick();
			break;
		}
	}
	
	EnableButtons(bEnable, bSaveCancel) {
		var updToolBar = angular.element("#UpdToolBar").data("kendoToolBar");
			   
		if (updToolBar) {
			updToolBar.enable("#NewBtn", bEnable);
			updToolBar.enable("#RemoveBtn", bEnable);

			updToolBar.enable("#SaveBtn", bSaveCancel);
			updToolBar.enable("#CancelBtn", bSaveCancel);
		}
	}
	
	// This function calls the datasource.sync() function to send updates to backend service
	OnSaveClick() {
		var i,
			that = this,
			promise,
			empDataSrc = this.$ds.EmployeeDS;
		
		if (empDataSrc.hasChanges()) {
			this.EnableButtons(false, false);
			promise = empDataSrc.sync();
			
			promise.done(function () {
				console.log("Operation was successful!");
				that.EnableButtons(true, true);
				
				if (that.addMode ===  true) {
					that.addMode = false;
				}
			});

			promise.fail(function (xhr) {
				var errors,
					i;
				
				that.EnableButtons(false, true);
				if (that.addMode ===  true) {
					console.log("Create was NOT successful!");
				} else {
					console.log("Update was NOT successful!");
				}
				
				errors = empDataSrc.transport.jsdo.getErrors();
				
				for (i = 0; i < errors.length; i += 1) {
					console.log(errors[i].error);
				}
				
			}); // end promise.fail    
		}
	}
	
	// OnCreateClick() adds a new row to the datasource.  The add() returns its corresponding
	// dataItem with default values.  Once the 'Save' btn is selected, the new operation
	// will then be sent to the backend
	OnCreateClick() {
		var listView = angular.element("#EmployeeLV").data("kendoListView");
		 
		this.EnableButtons(false, true);
		this.addMode = true;
		
		// Do not want the select handler to cancel the add()
		this.cancelOnSelect = false;
		
		listView.add();
		listView.refresh();
		listView.select(listView.element.children().first());
		
		// Reset cancelOnSelect
		this.cancelOnSelect = true;
	}
	
	// OnRemoveClick() removes the current row from the datasource as well as the backend.
	// ListView triggers remove event and if not prevented calls DataSource sync method.
	OnRemoveClick() {
		var that = this,
			listView = angular.element("#EmployeeLV").data("kendoListView"),
			empDataViewModel = this.$viewModels.EmployeeDSModel,
			empDataSrc = this.$ds.EmployeeDS,
			promise;
		
		// Calling ListView's remove, ListView will also call the dataSource. 
		// But I want to have a promise on sync()
		//var selectedRow = listView.select();
		//listView.remove(selectedRow);
		
		this.EnableButtons(false, false);
		
		// Do not want the select handler cancel the remove()
		this.cancelOnSelect = false;

		empDataSrc.remove(empDataViewModel);
		promise = empDataSrc.sync();
		
		promise.done(function () {
			console.log("Delete was successful!");
			that.EnableButtons(true, true);
		});
		promise.fail(function (xhr) {
			var errors,
				i,
				empDataSrc = that.$ds.EmployeeDS;
			
			console.log("Delete was NOT successful!");
			errors = empDataSrc.transport.jsdo.getErrors();
			for (i = 0; i < errors.length; i += 1) {
				console.log(errors[i].error);
			}
			
			that.EnableButtons(true, true);
		}); // end promise.fail
		
		promise.always(function () {
			// Reset cancelOnSelect
			this.cancelOnSelect = true;
		});
	}
	   
	// OnCancelClick() cancels a pending create or update operation
	OnCancelClick($scope, customData) {
		var empDataViewModel = this.$viewModels.EmployeeDSModel,
			empDataSrc = this.$ds.EmployeeDS;
			
		if (empDataSrc.hasChanges()) {
			empDataSrc.cancelChanges();
			if (this.addMode) {
				this.EnableButtons(true, true);
			}
		}
	}
	
}

EmployeesEmployeeViewCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default EmployeesEmployeeViewCtrl
