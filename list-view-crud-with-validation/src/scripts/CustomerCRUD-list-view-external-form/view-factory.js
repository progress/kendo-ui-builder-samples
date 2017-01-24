/*global angular, kendo, console */
/*jslint nomen: true */
(function (angular) {
    "use strict";
    angular
        .module('viewFactories')
        .factory('customerCrudListViewExternalForm', ['$q', 'dsService', function ($q, dsService) {

            function CustomerCrudListViewExternalForm() {
                this.scope = null;
				
				// Save reference to body of HTML page to add progress indicator
                this.body = angular.element('body');
            }

            function selectListViewItemByUid(listview, uid) {
                var item = angular.element("[data-uid='" + uid + "']");
                listview.select(item);
            }
            
            CustomerCrudListViewExternalForm.prototype = {
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
                        return that.scope._$ds.CustomerDs.hasChanges();
                    }, function (hasChanges, oldValue) {
                        var cancelButton = angular.element("#cancel").data("kendoButton");
                        if (cancelButton) {
                            cancelButton.enable(hasChanges);
                        }
                    });
                    
                    // Watch for widget from the phone directive. It is changed when it is created.
                    // Then find the input element and add custom attribute to it used later via validator.
                    cancelPhoneWatch = $scope.$watch(function () {
                        return $scope.phone.widget;
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
                    this.scope.salesRep.validation.required = true;                    
                    this.scope.phone.validation.required = true;
                    this.scope.name.validation.required = true;
                    this.scope.address.validation.required = true;                    
                    this.scope.state.validation.required = true;
                    this.scope.country.validation.required = true;
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function (customData) {
                    this.scope._$ds.CustomerDs.unbind('change');
                    this.scope.listview.widget.unbind('change');
                },
                dataBoundHandler : function (e) {
                    var that = this,
                        scope = that.scope,
                        listView = scope.listview.widget;

                    // This code needs to be used only once.
                    // It can be rewritten by detaching the dataBound handler when it is fired for the first time,
                    // however, if there is more logic in the dataBound event, such an approach cannot be used.
                    if (!scope.dataBoundFired) {
                        listView.select(listView.element.children().first());
                        scope.dataBoundFired = true;
                        scope._$ds.CustomerDs.bind('change', function (e) {
                            if (!e.action || e.action === 'remove') {
                                listView.select(listView.element.children().first());
                            }
                            if (e.action === 'sync') {
                                var model = scope._$viewModels.CustomerDsModel;
                                selectListViewItemByUid(listView, model.uid);
                            }
                        });

                        listView.bind('change', function (e) {
                            scope.insertInProgress = false;
                        });
                    }

					// Hide progress indicator					
                    kendo.ui.progress(this.body, false);
                },
                newHandler: function () {
                    this.scope.insertInProgress = true;
                    this.scope._$viewModels.CustomerDsModel = dsService.createPristineModel(this.scope._$ds.CustomerDs);
                },
                saveHandler: function () {
                    var scope = this.scope,
                        listView = scope.listview.widget,
                        dataSource = scope._$ds.CustomerDs,
                        model = scope._$viewModels.CustomerDsModel;

                    // Check if every validated input has right value
                    if (scope.validator.validate()) {
                        // scope.$emit('notification', {type: 'success', message: 'Record Saved'});
                        if (scope.insertInProgress) {
                            dsService.create(dataSource, model);
                            dsService.save(dataSource);

                            // Page to the last page of the listview in order to show newly inserted item
                            dataSource.page(dataSource.totalPages());
                            selectListViewItemByUid(listView, model.uid);
                        } else {
                            dsService.save(dataSource);
                        }
                        scope.insertInProgress = false;
                    } else {
                        scope.$emit('notification', {type: 'error', message: 'Validation Failed'});
                    }
                },
                deleteHandler: function () {
                    var that = this,
                        dataSource = this.scope._$ds.CustomerDs;
                    function removeItem() {
                        dsService.remove(dataSource, that.scope._$viewModels.CustomerDsModel);
                        dsService.save(dataSource);
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
                },
                cancelHandler: function () {
                    var scope = this.scope,
                        model,
                        listView = scope.listview.widget;
                    
                    scope.insertInProgress = false;
                    model = dsService.cancel(scope._$ds.CustomerDs, scope._$viewModels.CustomerDsModel);
                    if (scope.insertInProgress) {
                        listView.select(listView.element.children().first());
                    } else {
                        selectListViewItemByUid(scope.listview.widget, model.uid);
                    }
                    setTimeout(function () {
                        scope.validator.validate();
                    });
                }
            };

            return new CustomerCrudListViewExternalForm();
        }]);

}(angular));
