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

        this.$ds['ApplicantDS'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('SemanticTypes', {
                "jsdo": "Applicant"
            }),

            type: "jsdo",

            pageSize: 1,

        });
        this.$ds['ApplicantDS'].bind('error', this._$errorHandler.bind(this));

        this.$ds['ViewDataSource1'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('SemanticTypes', {
                "jsdo": "Applicant"
            }),

            type: "jsdo",

            pageSize: 20,

        });
        this.$ds['ViewDataSource1'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['ApplicantDSModel'] = this.$dsService.createPristineModel(this.$ds['ApplicantDS']);

        this.$viewModels['ViewDataSource1Model'] = this.$dsService.createPristineModel(this.$ds['ViewDataSource1']);

        this.$customSections = {
            top: 'views.applicants.applicant-view.topSection.html'
        };

        this.$domReady = false;

        this.$components['NavToolbar'] = {
            widget: null,
            options: {
                resizable: true,
                items: [{
                        type: 'button',
                        text: 'First',
                        id: 'FirstBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Prev',
                        id: 'PrevBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Next',
                        id: 'NextBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Last',
                        id: 'LastBtn',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    }
                ]
            },
            events: {
                onClick: (e) => {

                    this['onNavToolbarClick'](e);

                },
                onToggle: (e) => {

                }
            }
        };

        this.$components['UpdToolbar'] = {
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
                        type: 'separator'
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

                    this['onCRUDToolbarClick'](e);

                },
                onToggle: (e) => {

                }
            }
        };

        this.$components['ApplicantIdLbl'] = {};

        this.$components['ApplicantIdTB'] = {
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

        this.$components['UserNameLbl'] = {};

        this.$components['UserNameTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['NameLbl'] = {};

        this.$components['NameTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['PasswordLbl'] = {};

        this.$components['PasswordTB'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['EmployeedCBLbl'] = {};

        this.$components['EmployedCB'] = {
            events: {
                onChange: (e) => {

                }
            }
        };

        this.$components['AgeLbl'] = {};

        this.$components['AgeCB'] = {
            widget: null,
            options: {
                dataSource: this.$ds['ViewDataSource1'],
                dataTextField: "",
                dataValueField: "",
                valuePrimitive: false,
                filter: "none"
            },
            events: {
                onChange: (e) => {

                    this['onChangeAge'](e);

                },
                onSelect: (e) => {

                },
                onFilter: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['EmailLbl'] = {};

        this.$components['EmailTB'] = {
            "options": {
                "title": "",
                "defaultValue": "",
                "placeholder": "john.doe@example.net",
                "debounce": 0
            },
            "events": {
                onChange: function(e) {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['EmployedLbl'] = {};

        this.$components['EmployedRadio'] = {
            events: {
                onChange: (e) => {

                }
            }
        };

        this.$components['ExpectedHikeLbl'] = {};

        this.$components['PayHikeCurrencyTB'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "c",
                placeholder: "",

                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['PhoneLbl'] = {};

        this.$components['PhoneTB'] = {
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

        this.$components['ResumeLbl'] = {};

        this.$components['ResumeEditor'] = {
            widget: null,
            options: {

                encoded: true
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

        this.$ds['ApplicantDS'].unbind('error', this._$errorHandler);

        this.$ds['ViewDataSource1'].unbind('error', this._$errorHandler);

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