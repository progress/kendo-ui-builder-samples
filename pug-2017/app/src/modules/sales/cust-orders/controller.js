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

        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        var that = this;

        this.$parentDs = new kendo.data.DataSource({
            transport: this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "CustomerOrders",
                "tableRef": "ttCustomer"
            }),

            requestStart: function(e) {
                if (that.$childDs.hasChanges() && confirm(that.$pendingChangeMessage)) {
                    e.preventDefault();
                }
            },

            type: "jsdo",

            pageSize: 6,

        });

        if (this.$dataProviderService.dataProviders['SportsService'].type === 'progress-data-provider') {
            this.$jsdoInstance = new progress.data.JSDO({
                name: 'CustomerOrders'
            });
            this.$parentDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$parentDs.bind('error', this._$errorHandler.bind(this));

        this.$childDs = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "CustomerOrders",
                "tableRef": "ttOrder",
                "readLocal": true
            }),

            requestStart: function(e) {
                if (e.type !== 'update' &&
                    e.type !== 'create' &&
                    e.type !== 'submit' &&
                    e.type !== 'destroy' &&
                    e.sender.hasChanges() &&
                    confirm(that.$pendingChangeMessage)) {
                    e.preventDefault();
                }
            },

            type: "jsdo",

            pageSize: 6,

        });

        if (this.$dataProviderService.dataProviders['SportsService'].type === 'progress-data-provider') {
            this.$childDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$childDs.bind('error', this._$errorHandler.bind(this));
        this.$childDs.bind('change', this._$changeHandler.bind(this));

        this.$model = {
            parentField: "CustNum",
            childField: "CustNum",
            parentTitle: "Customers",
            childTitle: "Orders",
            parentGridOptions: {
                pageable: {
                    pageSize: 6,
                    refresh: true
                },
                filterable: false,
                groupable: true,
                resizable: false,
                reorderable: false,
                sortable: true,
                selectable: true,
                columns: [{
                        "encoded": true,
                        "field": "CustNum",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "CustNum"
                    },
                    {
                        "encoded": true,
                        "field": "Name",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Name"
                    },
                    {
                        "encoded": true,
                        "field": "Balance",
                        "filterable": true,
                        "format": "{0:c}",
                        "sortable": true,
                        "title": "Balance"
                    },
                    {
                        "encoded": true,
                        "field": "SalesRep",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "SalesRep"
                    }
                ],
                dataSource: this.$parentDs
            },
            childGridOptions: {
                autoBind: false,
                pageable: {
                    pageSize: 6,
                    refresh: true
                },

                toolbar: ["create"],

                messages: {
                    commands: {
                        "cancel": "Cancel changes",
                        "create": "New",
                        "save": "Save changes",
                        "canceledit": "Cancel",
                        "destroy": "Delete",
                        "edit": "Edit",
                        "update": "Update"
                    }
                },

                editable: 'inline',
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
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
                        "field": "OrderStatus",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "OrderStatus"
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
                        "command": [
                            "edit",
                            "destroy"
                        ],
                        "title": "&nbsp;",
                        "width": 250
                    }
                ],
                dataSource: this.$childDs,

                selectable: "row"

            },
            customSections: {
                top: 'views.sales.cust-orders.topSection.html',
                topParent: 'views.sales.cust-orders.topParentSection.html',
                topChild: 'views.sales.cust-orders.topChildSection.html',
                middle: 'views.sales.cust-orders.middleSection.html',
                bottom: 'views.sales.cust-orders.bottomSection.html'
            },
            parentGridEvents: {
                onDataBound: (e) => {

                    this._$dataBoundHandler(e);
                },
                onRowSelect: (e) => {
                    this._$rowSelectHandler(e);

                    this['onParentRowSelect'](e);

                },
            },
            childGridEvents: {
                onRowSelect: (e) => {

                    this['onChildRowSelect'](e);

                },
                onDataBound: (e) => {

                },
                onRowCreate: (e) => {

                    this._$disableGridsIteractions(e);

                },
                onRowUpdate: (e) => {

                    this._$disableGridsIteractions(e);

                },
                onRowDelete: (e) => {

                }
            }
        };
    }

    $onInit() {
        this.$scope.$on('$includeContentLoaded', () => {
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
            if (this.includeContentError) {
                this.includeContentError(e);
            }
        });

        this.$scope.$watch(() => {
            return this.$childGrid;
        }, (newValue, oldValue) => {
            if (newValue) {
                newValue.bind('dataBound', this._$enableGridsIteractions.bind(this));
                newValue.bind('cancel', this._$enableGridsIteractions.bind(this));
            }
        });

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$disableGridsIteractions() {
        this.$parentGrid.wrapper.find('.k-grid-content tr[data-uid]').addClass('kuib-pointer-events-none');
        this.$childGrid.wrapper.find('.k-grid-add, .k-grid-edit, .k-grid-delete').addClass('kuib-disabled');
    }

    _$enableGridsIteractions() {
        this.$parentGrid.wrapper.find('.k-grid-content tr[data-uid]').removeClass('kuib-pointer-events-none');
        this.$childGrid.wrapper.find('.k-grid-add, .k-grid-edit, .k-grid-delete').removeClass('kuib-disabled');
    }

    _$routeChange(event) {
        if (this.$childDs.hasChanges() && confirm(this.$pendingChangeMessage)) {
            event.preventDefault();
        }

        return;
    }

    _$beforeunloadHandler(e) {
        if (this.$childDs.hasChanges()) {
            return this.$pendingChangeMessage;
        }
    }

    _$dataBoundHandler(e) {
        var that = this;
        this.$scope.$evalAsync(() => {
            this.$parentGrid.select('tr[data-uid]:eq(0)');
        });
    }

    _$rowSelectHandler(e) {
        var filter = this.$childDs.filter();
        var filters = [];
        var selectedItem = this.$parentGrid.dataItem(this.$parentGrid.select());
        var newFilter = this._$getChildFilter(selectedItem);
        var isNew = true;
        var index = 0;

        if (!filter) {
            filters.push(newFilter);
        } else {
            filters = filter.filters;

            for (index = 0; index < filters.length; index++) {
                if (filters[index].field == newFilter.field) {
                    isNew = false;
                    break;
                }
            }
            if (isNew) {
                filters.push(newFilter);
            } else {
                filters[index] = newFilter;
            }
        }

        //apply the filters
        this.$childDs.filter(filters);
    }

    _$getChildFilter(selectedItem) {
        return {
            field: 'CustNum',
            operator: 'eq',
            value: selectedItem['CustNum']
        };
    }

    _$errorHandler(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$changeHandler(e) {
        if (e.action == 'add') {
            var value = e.sender.filter().filters.filter(f => {
                return f.field === this.$model.parentField
            })[0].value;

            e.items[0].set(this.$model.parentField, value);
        }
    }

    _$destroy() {
        this.$parentDs.unbind('error', this._$errorHandler);
        this.$childDs.unbind('error', this._$errorHandler);
        this.$childDs.unbind('change', this._$changeHandler);

        this.$childGrid.unbind('dataBound', this._$enableGridsIteractions);
        this.$childGrid.unbind('cancel', this._$enableGridsIteractions);

        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController