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

        this.$ds['SaleReps'] = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "SalesRep"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds['SaleReps'].bind('error', this._$errorHandler.bind(this));

        this.$ds['Orders'] = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "CustomerOrders",
                "tableRef": "ttOrder"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds['Orders'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['SaleRepsModel'] = this.$dsService.createPristineModel(this.$ds['SaleReps']);

        this.$viewModels['OrdersModel'] = this.$dsService.createPristineModel(this.$ds['Orders']);

        this.$customSections = {
            top: 'views.main.dashboard.topSection.html'
        };

        this.$domReady = false;

        this.$components['tabstrip0'] = {
            widget: null,
            options: {
                tabPosition: 'top'
            },
            items: [{
                    "text": "Jan"
                },
                {
                    "text": "Feb"
                },
                {
                    "text": "Mar"
                },
                {
                    "text": "April"
                },
                {
                    "text": "May"
                },
                {
                    "text": "June"
                },
                {
                    "text": "July"
                },
                {
                    "text": "Aug"
                },
                {
                    "text": "Sept"
                },
                {
                    "text": "Oct"
                },
                {
                    "text": "Nov"
                },
                {
                    "text": "Dec"
                }
            ],
            events: {
                onShow: (e) => {

                },
                onSelect: (e) => {

                }
            }
        };

        this.$components['barchartsJanuary'] = {
            widget: null,
            options: {
                title: {
                    text: 'Sales By Month'
                },
                legend: {
                    visible: false,
                    background: 'white',
                    position: 'top'
                },
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_1",
                        name: "January"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['SaleReps']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsFebruary'] = {
            widget: null,
            options: {
                title: {
                    text: 'Sales By Month'
                },
                legend: {
                    visible: false,
                    background: '#ffffff',
                    position: 'top'
                },
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_2",
                        name: "February"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsMarch'] = {
            widget: null,
            options: {
                title: {
                    text: 'Sales By Month'
                },
                legend: {
                    visible: false,
                    background: 'white',
                    position: 'top'
                },
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_3",
                        name: "March"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsApril'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_4",
                        name: "April"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsMay'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_5",
                        name: "May"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsJune'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_6",
                        name: "June"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsJuly'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
                        }

                    }
                },
                seriesDefaults: {
                    type: 'bar',
                    labels: {
                        visible: false
                    }
                },
                series: [{
                        field: "MonthQuota_7",
                        name: "July"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsAugust'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_8",
                        name: "August"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsSeptember'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_9",
                        name: "September"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsOctober'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_10",
                        name: "October"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsNovember'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_11",
                        name: "November"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['barchartsDecember'] = {
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
                valueAxis: {

                    min: 0,

                    max: 5000,

                    line: {
                        visible: true
                    },
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 0
                        }

                    }

                },
                categoryAxis: {
                    field: 'RepName',
                    labels: {
                        format: '{0}',
                        rotation: {
                            angle: 90
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
                        field: "MonthQuota_12",
                        name: "December"
                    }

                ],
                tooltip: {
                    format: '',
                    visible: false
                },
                dataSource: this.$ds['']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

                }
            }
        };

        this.$components['donutcharts0'] = {
            widget: null,
            options: {
                title: {
                    text: 'Sales by Rep'
                },
                legend: {
                    visible: false,
                    background: 'white',
                    position: 'top'
                },
                seriesDefaults: {
                    type: 'donut',
                    labels: {
                        visible: true,
                        background: 'white',
                        position: 'above'
                    }
                },
                series: [{
                        "field": "YearQuota",
                        "categoryField": "SalesRep",
                        "startAngle": 90

                    }

                ],
                tooltip: {
                    format: '',
                    visible: true,
                    template: (dataItem) => {
                        return this['salesPersonNameFn'](dataItem);
                    }
                },
                dataSource: this.$ds['SaleReps']
            },
            events: {
                onSeriesClick: (e) => {

                },
                onDataBound: (e) => {

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

        this.$ds['SaleReps'].unbind('error', this._$errorHandler);

        this.$ds['Orders'].unbind('error', this._$errorHandler);

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