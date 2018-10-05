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
        this.$translate = $injector.get('$translate');
        this.$emitService = $injector.get('emitService');
        this.$compile = $injector.get('$compile');

        this.$dsOptions = {};
        this.$ds = {};
        this.$viewModels = {};
        this.$components = {};

        this.$grids = [];
        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        this.$showPendingChangeMessage = true;

        var that = this;

        this.$dsOptions['CustomerData'] = {
            batch: true,
            transport: {
                jsdo: "Customer"
            },
            type: "jsdo",
            pageSize: 10,
        }
        this.$ds['CustomerData'] = new kendo.data.DataSource(this._$getDataSourceOptions('CustomerData'));
        this.$ds['CustomerData'].bind('error', this._$errorHandler.bind(this));

        this.$dsOptions['Country'] = {
            batch: true,
            transport: {
                jsdo: "Country"
            },
            type: "jsdo",
            pageSize: 20,
        }
        this.$ds['Country'] = new kendo.data.DataSource(this._$getDataSourceOptions('Country'));
        this.$ds['Country'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['CustomerDataModel'] = this.$dsService.createPristineModel(this.$ds['CustomerData']);

        this.$viewModels['CountryModel'] = this.$dsService.createPristineModel(this.$ds['Country']);

        this.$customSections = {
            top: 'views.customers.customers-graphical.topSection.html'
        };

        this.$domReady = false;

        this.$components['countryChart'] = {
            widget: null,
            options: {
                legend: {
                    visible: true,
                    background: 'white',
                    position: 'top'
                },
                valueAxis: {
                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 270
                        }
                    }
                },
                categoryAxis: {
                    field: 'Country',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }
                    }
                },
                seriesDefaults: {
                    type: 'column',
                    labels: {
                        visible: false
                    }
                },
                series: [{
                    field: "Balance",
                    name: "balance",
                    labels: {}
                }],
                tooltip: {
                    format: '{0}',
                    visible: true
                },
                dataSource: this.$ds['CustomerData']
            },
            events: {
                onSeriesClick: (e) => {},
                onDataBound: (e) => {}
            }
        };

        this.$components['pieChart'] = {
            widget: null,
            options: {
                legend: {
                    visible: true,
                    background: 'white',
                    position: 'right'
                },
                seriesDefaults: {
                    type: 'pie',
                    labels: {
                        visible: false,
                        background: 'white'
                    }
                },
                series: [{
                    field: "Balance",
                    categoryField: "",
                    startAngle: 90,
                    labels: {}
                }],
                tooltip: {
                    format: '',
                    visible: true
                },
                dataSource: this.$ds['CustomerData']
            },
            events: {
                onSeriesClick: (e) => {},
                onDataBound: (e) => {}
            }
        };

        this.$components['searchBar'] = {
            widget: null,
            options: {
                dataSource: this.$ds['Country'],
                dataTextField: "Country",
                valuePrimitive: true,
                filter: "contains"
            },
            events: {
                onChange: (e) => {
                    this['changeEvent'](e);
                },
                onSelect: (e) => {},
                onFilter: (e) => {}
            },
            validation: {
                required: false
            }
        };

        this.$components['customerGrid'] = {
            widget: null,
            options: {
                pageable: {
                    refresh: true
                },
                editable: 'readonly',

                selectable: "multiple, row",
                filterable: true,
                groupable: true,
                resizable: true,
                reorderable: true,
                sortable: true,
                columns: [{
                        editable: () => true,
                        encoded: true,
                        field: "CustNum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Cust Num"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Name",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Name"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Country",
                        filterable: false,
                        format: "",
                        sortable: true,
                        title: "Country"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Balance",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Balance"
                    }
                ],
                dataSource: this.$ds['CustomerData']
            },
            events: {
                onRowSelect: (e) => {},
                onDataBound: (e) => {},
                onRowCreate: (e) => {},
                onRowUpdate: (e) => {},
                onRowDelete: (e) => {}
            }
        };

        var currentComponent = this.$components['customerGrid'];

        if (currentComponent.options.messages) {
            this.$translate(["modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.cancel", "modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.create", "modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.save", "modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.canceledit", "modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.destroy", "modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.edit", "modules.Customers.views.CustomersGraphical.components.customerGrid.editMessages.update"])
                .then(function(translations) {
                    var editMessages = {};
                    Object.keys(translations).forEach(function(namespacedKey) {
                        var keyParts = namespacedKey.split('.');
                        var key = keyParts[keyParts.length - 1];
                        editMessages[key] = translations[namespacedKey];
                    });
                    currentComponent.options.messages.commands = editMessages;
                });
        }

        this.$translate(["modules.Customers.views.CustomersGraphical.components.customerGrid.columns.CustNum", "modules.Customers.views.CustomersGraphical.components.customerGrid.columns.Name", "modules.Customers.views.CustomersGraphical.components.customerGrid.columns.Country", "modules.Customers.views.CustomersGraphical.components.customerGrid.columns.Balance"])
            .then(function(translations) {
                Object.keys(translations).forEach(function(namespacedKey) {
                    var keyParts = namespacedKey.split('.');
                    var key = keyParts[keyParts.length - 1];
                    currentComponent.options.columns.forEach(function(column) {
                        if (key === column.field) {
                            column.title = translations[namespacedKey];
                        }
                    });
                });
            });

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

        this.$scope.$on('$stateChangeStart', (event) => {
            if (this.$showPendingChangeMessage) {
                this._$routeChange(event);
            }

            this.$showPendingChangeMessage = true;
        });

        this.$deregisterLogoutListener = this.$emitService.on('logout', (event, param) => {
            this._$routeChange(event);
            if (event.defaultPrevented) {
                param.defaultPrevented = true;
            } else {
                this.$showPendingChangeMessage = false;
            }
        });

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$getDataSourceOptions(name) {
        return this.$dsOptions[name];
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
        this.$deregisterLogoutListener();
        this.$ds['CustomerData'].unbind('error', this._$errorHandler);
        this.$ds['Country'].unbind('error', this._$errorHandler);

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