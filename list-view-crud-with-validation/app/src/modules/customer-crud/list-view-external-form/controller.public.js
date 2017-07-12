import BaseController from './controller.js'

class CustomerCRUDListViewExternalFormCtrl extends BaseController {
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

	selectListViewItemByUid(listview, uid) {
		var item = angular.element("[data-uid='" + uid + "']");
		listview.select(item);
	}
	
    // Fired when view content is loaded
    onShow($scope) {
		var that = this,
			element = angular.element('.main-content > [ui-view]'),
			cancelWatch,
			cancelPhoneWatch;
		
		this.scope = $scope;

		this.scope.validator = element.kendoValidator({
			errorTemplate: '<span>#=message#</span>'
		}).data('kendoValidator');
			
		cancelWatch = $scope.$watch(function () {
			return angular.element("#cancel").data("kendoButton");
		}, function (cancelButton, oldValue) {
			if (cancelButton) {
				cancelButton.enable(false);
				cancelWatch();
			}
		});
			
		$scope.$watch(function () {
			return that.$ds.CustomerDs.hasChanges();
		}, function (hasChanges, oldValue) {
			var cancelButton = angular.element("#cancel").data("kendoButton");
			if (cancelButton) {
				cancelButton.enable(hasChanges);
			}
		});
		
		// Watch for widget from the phone directive. It is changed when it is created.
		// Then find the input element and add custom attribute to it used later via validator.
		cancelPhoneWatch = $scope.$watch(function () {
			return that.$components.phone.widget;
		}, function (newValue, oldValue) {
			if (newValue) {
				var phoneInput = newValue.element.find('> input');
				phoneInput.attr('data-validmask-msg', 'Phone number is not valid');

				// Add custom rule to the validator for the phone input
				$scope.validator.options.rules.validmask = function (input) {
					if (input.is("[data-validmask-msg]") && input.val() !== "") {
						var maskedtextbox = input.data("kendoMaskedTextBox");
						return maskedtextbox.value().indexOf(maskedtextbox.options.promptChar) === -1;
					}
					return true;
				};

				$scope.validator.setOptions($scope.validator.options.rules);
				cancelPhoneWatch();
			}
		});

		// Show progress indicator
		kendo.ui.progress(this.body, true);

		// Set required attribute for the component's models
		this.$components.salesRep.validation.required = true;                    
		this.$components.phone.validation.required = true;
		this.$components.name.validation.required = true;
		this.$components.address.validation.required = true;                    
		this.$components.state.validation.required = true;
		this.$components.country.validation.required = true;
    }

	onHide(customData) {
		this.$ds.CustomerDs.unbind('change');
		this.$components.listview.widget.unbind('change');
	}

	dataBoundHandler(e) {
		var that = this,
			scope = that.scope,
			listView = this.$components.listview.widget;

		// This code needs to be used only once.
		// It can be rewritten by detaching the dataBound handler when it is fired for the first time,
		// however, if there is more logic in the dataBound event, such an approach cannot be used.
		if (!scope.dataBoundFired) {
			listView.select(listView.element.children().first());
			scope.dataBoundFired = true;
			that.$ds.CustomerDs.bind('change', function (e) {
				if (!e.action || e.action === 'remove') {
					listView.select(listView.element.children().first());
				}
				if (e.action === 'sync') {
					var model = that.$viewModels.CustomerDsModel;
					that.selectListViewItemByUid(listView, model.uid);
				}
			});

			listView.bind('change', function (e) {
				scope.insertInProgress = false;
			});
		}

		// Hide progress indicator					
		kendo.ui.progress(this.body, false);
	}
	
	newHandler() {
		this.scope.insertInProgress = true;
		this.$viewModels.CustomerDsModel = this.$dsService.createPristineModel(this.$ds.CustomerDs);
	}
	
	saveHandler() {
		var scope = this.scope,
			listView = this.$components.listview.widget,
			dataSource = this.$ds.CustomerDs,
			model = this.$viewModels.CustomerDsModel;

		// Check if every validated input has right value
		if (scope.validator.validate()) {
			// scope.$emit('notification', {type: 'success', message: 'Record Saved'});
			if (scope.insertInProgress) {
				this.$dsService.create(dataSource, model);
				this.$dsService.save(dataSource);

				// Page to the last page of the listview in order to show newly inserted item
				dataSource.page(dataSource.totalPages());
				this.selectListViewItemByUid(listView, model.uid);
			} else {
				this.$dsService.save(dataSource);
			}
			scope.insertInProgress = false;
		} else {
			scope.$emit('notification', {type: 'error', message: 'Validation Failed'});
		}
	}
	
	deleteHandler() {
		var that = this,
			dataSource = this.$ds.CustomerDs;
			
		function removeItem() {
			that.$dsService.remove(dataSource, that.$viewModels.CustomerDsModel);
			that.$dsService.save(dataSource);
			that.scope.insertInProgress = false;
		}

		// Show confirmation dialog for deleting records
		this.scope.$emit('dialog', {
			title: 'Are you sure you want to delete this record?',
			hint: 'The record will be permanently removed.',
			okButton: {
				handler: removeItem
			}
		});
	}
	
	cancelHandler() {
		var scope = this.scope,
			model,
			listView = this.$components.listview.widget;
		
		scope.insertInProgress = false;
		model = this.$dsService.cancel(this.$ds.CustomerDs, this.$viewModels.CustomerDsModel);
		if (scope.insertInProgress) {
			listView.select(listView.element.children().first());
		} else {
			this.selectListViewItemByUid(this.$components.listview.widget, model.uid);
		}
		setTimeout(function () {
			scope.validator.validate();
		});
	}
}

CustomerCRUDListViewExternalFormCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default CustomerCRUDListViewExternalFormCtrl	