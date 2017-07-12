///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$dataProviderService = $injector.get('providerService');
        this.$dsService = $injector.get('dsService');

        this.$ds = {};
        this.$viewModels = {};
        this.$components = {};

        this.$grids = [];
        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';

        this.$ds['EmployeeDS'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('EmployeeService', {
                "jsdo": "Employees"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds['EmployeeDS'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['EmployeeDSModel'] = this.$dsService.createPristineModel(this.$ds['EmployeeDS']);

        this.$customSections = {
            top: 'views.employees.employee-view.topSection.html'
        };

        this.$domReady = false;

        this.$components['EmployeeLV'] = {
            widget: null,
            options: {

                selectable: "Single",

                dataSource: this.$ds['EmployeeDS'],
                template: (dataItem) => {
                    return kendo.template(angular.element("#ListViewTemplateID").html())(dataItem);
                }
            },
            events: {
                onChange: (e) => {

                    this['OnSelect'](e);

                },
                onCancel: (e) => {

                },
                onDataBound: (e) => {

                    this['OnDataBound'](e);

                },
                onEdit: (e) => {

                },
                onRemove: (e) => {

                },
                onSave: (e) => {

                }
            }
        };

        this.$components['UpdToolBar'] = {
            widget: null,
            options: {
                resizable: true,
                items: [{
                        type: 'button',
                        text: 'New',
                        id: 'NewBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Remove',
                        id: 'RemoveBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'separator'
                    },
                    {
                        type: 'button',
                        text: 'Save',
                        id: 'SaveBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Cancel',
                        id: 'CancelBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    }
                ]
            },
            events: {
                onClick: (e) => {

                    this['OnUpdToolbarClick'](e);

                },
                onToggle: (e) => {

                }
            }
        };

        this.$components['customhtml0'] = {
            options: {
                html: "&lt;hr&gt;"
            }
        };

        this.$components['EmpNumLbl'] = {};

        this.$components['EmpNumTB'] = {};

        this.$components['SickDaysLbl'] = {};

        this.$components['SickDaysTB'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                placeholder: "",

                step: 1,

                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {

                },
            },
            validation: {
                required: false
            }
        };

        this.$components['FirstNameLbl'] = {};

        this.$components['FirstNameTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['VacDaysLbl'] = {};

        this.$components['VacDaysTB'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                placeholder: "",

                step: 1,

                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {

                },
            },
            validation: {
                required: false
            }
        };

        this.$components['LastNameLbl'] = {};

        this.$components['LastNameTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['WorkPhoneTBLabel'] = {};

        this.$components['WorkPhoneTB'] = {
            widget: null,
            options: {

                mask: "(999) 000-0000",

                value: ""
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['AddressLbl'] = {};

        this.$components['AddressTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['BirthdateDPL'] = {};

        this.$components['BirthdateDP'] = {
            widget: null,
            options: {
                min: new Date("1899-12-31T22:00:00.000Z"),
                max: new Date("2099-12-30T22:00:00.000Z"),
                format: "M/d/yyyy"
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['CityTBLabel'] = {};

        this.$components['CityTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['PostalCodeLbl'] = {};

        this.$components['PostalCodeTB'] = {
            widget: null,
            options: {

                value: ""
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

    }

    $onInit() {
        this.$scope.$on('$includeContentLoaded', () => {
            this.$domReady = true;

            if (this.includeContentLoaded) {
                this.includeContentLoaded();
            }
        });

        this.$scope.$on('$viewContentLoaded', (e) => {
            if (this['onShow']) {
                this['onShow'](e.currentScope);
            }
        });

        this.$scope.$on('$includeContentError', (e) => {
            this.$domReady = true;

            if (this.includeContentError) {
                this.includeContentError(e);
            }
        });

        this.$scope.$on("kendoWidgetCreated", (event, widget) => {
            if (widget instanceof kendo.ui.Grid) {
                this.$grids.push(widget);
                if (widget.options.editable === 'inline' || (widget.options.editable === 'incell' && widget.dataSource.options.serverPaging === true)) {
                    widget.bind('edit', this._$disableEditButtons.bind(this));
                    widget.bind('dataBound', this._$enableEditButtons.bind(this));
                    widget.bind('cancel', this._$enableEditButtons.bind(this));
                    widget.dataSource.bind('requestStart', this._$gridDataSourceRequestStart.bind(this));
                }
            }
        });

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$disableEditButtons(e) {
        e.sender.wrapper.find('.k-grid-add, .k-grid-edit, .k-grid-delete').addClass('kuib-disabled');
    }

    _$enableEditButtons(e) {
        e.sender.wrapper.find('.k-grid-add, .k-grid-edit, .k-grid-delete').removeClass('kuib-disabled');
    }

    _$routeChange(e) {
        if (this._$gridsDataSourcesHasChanges() && confirm(this.$pendingChangeMessage)) {
            e.preventDefault();
        }

        return;
    }

    _$beforeunloadHandler(e) {
        if (this._$gridsDataSourcesHasChanges()) {
            return this.$pendingChangeMessage;
        }
    }

    _$gridDataSourceRequestStart(e) {
        if (e.type !== 'update' &&
            e.type !== 'create' &&
            e.type !== 'submit' &&
            e.type !== 'destroy' &&
            e.sender.hasChanges() &&
            confirm(this.$pendingChangeMessage)) {
            e.preventDefault();
        }
    }

    _$gridsDataSourcesHasChanges() {
        var hasChanges = false;

        this.$grids.forEach(grid => {
            if (grid.dataSource.hasChanges()) {
                hasChanges = true;
            }
        });

        return hasChanges;
    }

    _$errorHandler(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$destroy() {

        this.$ds['EmployeeDS'].unbind('error', this._$errorHandler);

        this.$grids.forEach((grid) => {
            grid.unbind('edit', this._$disableEditButtons);
            grid.unbind('dataBound', this._$enableEditButtons);
            grid.unbind('cancel', this._$enableEditButtons);
            grid.dataSource.unbind('requestStart', this.$gridDataSourceRequestStart);
        });
        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);
    }
}

export default BaseController