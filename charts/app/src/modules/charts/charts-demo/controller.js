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

        this.$ds['SalesrepDS'] = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('SalesrepService', {
                "jsdo": "Salesrep"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds['SalesrepDS'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['SalesrepDSModel'] = this.$dsService.createPristineModel(this.$ds['SalesrepDS']);

        this.$customSections = {
            top: 'views.charts.charts-demo.topSection.html'
        };

        this.$domReady = false;

        this.$components['tabstrip0'] = {
            widget: null,
            options: {
                tabPosition: 'top'
            },
            items: [{
                    "text": "Monthly Quotas"
                },
                {
                    "text": "Quota Per Person"
                }
            ],
            events: {
                onShow: (e) => {

                },
                onSelect: (e) => {

                }
            }
        };

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
                    max: '10000',
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
                    field: 'SalesRep',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: '0'
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
                        "field": "MonthQuota_1",
                        "name": "item1"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: true
                },
                dataSource: this.$ds['SalesrepDS']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['piecharts0'] = {
            widget: null,
            options: {
                title: {
                    text: ''
                },
                legend: {
                    visible: false,
                    background: 'white',
                    position: 'top'
                },
                seriesDefaults: {
                    type: 'pie',
                    labels: {
                        visible: true,
                        background: 'white',
                        template: (dataItem) => {
                            return this['pieChartLabelTemplate'](dataItem);
                        }
                    }
                },
                series: [{
                        "field": "MonthQuota_1",
                        "categoryField": "SalesRep",
                        "startAngle": 90
                    }

                ],
                tooltip: {
                    format: '',
                    visible: true
                },
                dataSource: this.$ds['SalesrepDS']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['grid0'] = {
            widget: null,
            options: {
                pageable: {
                    refresh: true
                },

                editable: 'readonly',

                selectable: "row",

                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                columns: [{
                        "encoded": true,
                        "field": "SalesRep",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Sales Rep"
                    },
                    {
                        "encoded": true,
                        "field": "RepName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Rep Name"
                    },
                    {
                        "encoded": true,
                        "field": "Region",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Region"
                    }
                ],
                dataSource: this.$ds['SalesrepDS']
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