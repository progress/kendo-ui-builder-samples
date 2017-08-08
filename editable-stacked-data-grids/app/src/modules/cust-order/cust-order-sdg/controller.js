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
            transport: this.$dataProviderService.getTransport('DemoService', {
                "jsdo": "CustOrderNSub",
                "tableRef": "eCustomer"
            }),

            requestStart: function(e) {
                if (that.$childDs.hasChanges() && confirm(that.$pendingChangeMessage)) {
                    e.preventDefault();
                }
            },

            type: "jsdo",

            pageSize: 5,

        });

        if (this.$dataProviderService.dataProviders['DemoService'].type === 'progress-data-provider') {
            this.$jsdoInstance = new progress.data.JSDO({
                name: 'CustOrderNSub'
            });
            this.$parentDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$parentDs.bind('error', this._$errorHandler.bind(this));

        this.$childDs = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('DemoService', {
                "jsdo": "CustOrderNSub",
                "tableRef": "eOrder",
                "readLocal": true
            }),

            type: "jsdo",

            pageSize: 10,

        });

        if (this.$dataProviderService.dataProviders['DemoService'].type === 'progress-data-provider') {
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
                    pageSize: 5,
                    refresh: true
                },
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
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
                        "field": "Address",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Address"
                    },
                    {
                        "encoded": true,
                        "field": "Phone",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Phone"
                    },
                    {
                        "encoded": true,
                        "field": "SalesRep",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "SalesRep"
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
                        "field": "State",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "State"
                    }
                ],
                dataSource: this.$parentDs
            },
            childGridOptions: {
                autoBind: false,
                pageable: {
                    pageSize: 10,
                    refresh: true
                },

                toolbar: ["create", "save", "cancel"],

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

                editable: 'incell',
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
                        "field": "CustNum",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "CustNum"
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
                        "title": "SalesRep"
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
                        "command": [
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
                top: 'views.cust-order.cust-order-sdg.topSection.html',
                topParent: 'views.cust-order.cust-order-sdg.topParentSection.html',
                topChild: 'views.cust-order.cust-order-sdg.topChildSection.html',
                middle: 'views.cust-order.cust-order-sdg.middleSection.html',
                bottom: 'views.cust-order.cust-order-sdg.bottomSection.html'
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

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$scope.$on('$destroy', this._$destroy.bind(this));
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

        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController