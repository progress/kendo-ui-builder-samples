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

        this.$ds['CustomerDS'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('CustomerService', {
                "jsdo": "Customer",
                "countFnName": "count"
            }),

            type: "jsdo",

            pageSize: 10,

            serverPaging: true,

            serverFiltering: true,

            serverSorting: true,

        });
        this.$ds['CustomerDS'].bind('error', this._$errorHandler.bind(this));

        this.$ds['SalesrepDS'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('SalesrepService', {
                "jsdo": "Salesrep"
            }),

            type: "jsdo",

            pageSize: 20,

        });
        this.$ds['SalesrepDS'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['CustomerDSModel'] = this.$dsService.createPristineModel(this.$ds['CustomerDS']);

        this.$viewModels['SalesrepDSModel'] = this.$dsService.createPristineModel(this.$ds['SalesrepDS']);

        this.$customSections = {
            top: 'views.module-1.customer-view.topSection.html'
        };

        this.$domReady = false;

        this.$components['grid0'] = {
            widget: null,
            options: {
                pageable: {
                    refresh: true
                },

                editable: 'readonly',

                selectable: "row",

                filterable: true,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: true,
                columns: [{
                        "encoded": true,
                        "field": "CustNum",
                        "filterable": true,
                        "sortable": true,
                        "title": "CustNum"
                    },
                    {
                        "encoded": true,
                        "field": "Name",
                        "filterable": true,
                        "sortable": true,
                        "title": "Name"
                    },
                    {
                        "encoded": true,
                        "field": "SalesRep",
                        "filterable": true,
                        "sortable": true,
                        "title": "SalesRep"
                    }
                ],
                dataSource: this.$ds['CustomerDS']
            },
            events: {
                onRowSelect: (e) => {

                    this['onRowSelect'](e);

                },
                onDataBound: (e) => {

                    this['onDataBound'](e);

                },
                onRowCreate: (e) => {

                },
                onRowUpdate: (e) => {

                },
                onRowDelete: (e) => {

                }
            }
        };

        this.$components['toolbar0'] = {
            widget: null,
            options: {
                resizable: true,
                items: [{
                        type: 'button',
                        text: 'New',
                        id: 'btnNew',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Save',
                        id: 'btnSave',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    },
                    {
                        type: 'button',
                        text: 'Delete',
                        id: 'btnDelete',
                        togglable: false,
                        primary: false,
                        click: (e) => {},
                        toggle: (e) => {}
                    }
                ]
            },
            events: {
                onClick: (e) => {

                    this['onClickToolbar'](e);

                },
                onToggle: (e) => {

                }
            }
        };

        this.$components['label0'] = {};

        this.$components['integertextbox0'] = {
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

        this.$components['label1'] = {};

        this.$components['textbox0'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label2'] = {};

        this.$components['salesreps'] = {
            widget: null,
            options: {
                dataSource: this.$ds['SalesrepDS'],
                dataTextField: "RepName",
                dataValueField: "SalesRep",
                valuePrimitive: false,
                filter: "none"
            },
            events: {
                onChange: (e) => {

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

        this.$components['label4'] = {};

        this.$components['phonetextbox0'] = {
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

        this.$components['label6'] = {};

        this.$components['currencytextbox0'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "c",
                placeholder: "",

                step: 500,

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

        this.$components['label9'] = {};

        this.$components['textarea0'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label3'] = {};

        this.$components['textbox1'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label7'] = {};

        this.$components['customhtml0'] = {
            options: {
                html: "&lt;div&gt;&lt;/div&gt;"
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

        this.$ds['CustomerDS'].unbind('error', this._$errorHandler);

        this.$ds['SalesrepDS'].unbind('error', this._$errorHandler);

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