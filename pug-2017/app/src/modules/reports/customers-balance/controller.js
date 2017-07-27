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

        this.$ds['ViewDataSource1'] = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('OrderMgtDataService', {
                "jsdo": "CustOrderNSub",
                "tableRef": "eCustomer"
            }),

            type: "jsdo",

            pageSize: 20,

        });
        this.$ds['ViewDataSource1'].bind('error', this._$errorHandler.bind(this));

        this.$ds['custOrders'] = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('OrderMgtDataService', {
                "jsdo": "CustOrderNSub",
                "tableRef": "eOrder"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds['custOrders'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['ViewDataSource1Model'] = this.$dsService.createPristineModel(this.$ds['ViewDataSource1']);

        this.$viewModels['custOrdersModel'] = this.$dsService.createPristineModel(this.$ds['custOrders']);

        this.$customSections = {
            top: 'views.reports.customers-balance.topSection.html'
        };

        this.$domReady = false;

        this.$components['barcharts0'] = {
            widget: null,
            options: {
                title: {
                    text: ''
                },
                legend: {
                    visible: true,
                    background: 'white',
                    position: 'top'
                },
                valueAxis: {
                    min: '0',
                    max: '15000',
                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: '0'
                        }
                    },
                    majorUnit: ''
                },
                categoryAxis: {
                    field: 'Name',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: '45'
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
                        "field": "Balance",
                        "name": "Balance"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: true
                },
                dataSource: this.$ds['ViewDataSource1']
            },
            events: {
                onSeriesClick: (e) => {

                    this['onSeriesClick'](e);

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['customhtml0'] = {
            options: {
                html: "&lt;h1&gt;Orders for customer: &lt;span id=&#34;cust&#34;&gt;All customers&lt;/span&gt;&lt;/h1&gt;&lt;p&gt;Clicking on chart column will filter the grid with orders for the clicked customer&lt;/p&gt;"
            }
        };

        this.$components['grid0'] = {
            widget: null,
            options: {
                pageable: {
                    refresh: true
                },

                editable: 'readonly',

                filterable: true,
                groupable: false,
                resizable: true,
                reorderable: false,
                sortable: true,
                columns: [{
                        "encoded": true,
                        "field": "OrderNum",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "OrderNum"
                    },
                    {
                        "encoded": true,
                        "field": "OrderDate",
                        "filterable": true,
                        "format": "{0:d}",
                        "sortable": true,
                        "title": "OrderDate"
                    },
                    {
                        "encoded": true,
                        "field": "Carrier",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Carrier"
                    },
                    {
                        "encoded": true,
                        "field": "SalesRep",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Salesrep"
                    },
                    {
                        "encoded": true,
                        "field": "OrderStatus",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "OrderStatus"
                    }
                ],
                dataSource: this.$ds['custOrders']
            },
            events: {
                onRowSelect: (e) => {

                },
                onDataBound: (e) => {

                },
                onRowCreate: (e) => {

                },
                onRowUpdate: (e) => {

                },
                onRowDelete: (e) => {

                }
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

        this.$ds['ViewDataSource1'].unbind('error', this._$errorHandler);

        this.$ds['custOrders'].unbind('error', this._$errorHandler);

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