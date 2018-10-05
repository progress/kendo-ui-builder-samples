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
        this.$compile = $injector.get('$compile');

        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        this.$emitService = $injector.get('emitService');
        this.$showPendingChangeMessage = true;
        var that = this;

        this.$dsOptions = {};
        this.$ds = {};

        this.$dsOptions['$parentDs'] = {
            transport: {
                jsdo: "OrderOrderLine",
                tableRef: "ttOrder"
            },
            type: "jsdo",
            pageSize: 5,
            requestStart: function(e) {
                if (that.$childDs.hasChanges() && confirm(that.$pendingChangeMessage)) {
                    e.preventDefault();
                }
            }
        };

        this.$parentDs = new kendo.data.DataSource(this._$getDataSourceOptions('$parentDs'));

        this.$domReady = false;

        this.$jsdoInstance = new progress.data.JSDO({
            name: 'OrderOrderLine'
        });
        this.$parentDs.transport.jsdo = this.$jsdoInstance;

        this.$parentDs.bind('error', this._$errorHandler.bind(this));

        this.$dsOptions['$childDs'] = {
            transport: {
                jsdo: "OrderOrderLine",
                tableRef: "ttOrderLine",
                readLocal: true
            },
            type: "jsdo",
            pageSize: 5,
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
        };

        this.$childDs = new kendo.data.DataSource(this._$getDataSourceOptions('$childDs'));

        this.$childDs.transport.jsdo = this.$jsdoInstance;
        this.$childDs.bind('error', this._$errorHandler.bind(this));
        this.$childDs.bind('change', this._$changeHandler.bind(this));

        this.$model = {
            parentTitle: "Order OrderLine (Hierarchical View)",
            childTitle: "&lt;Title&gt;",
            parentGridOptions: {
                pageable: {
                    pageSize: 5,
                    refresh: true
                },
                filterable: true,
                groupable: true,
                resizable: true,
                reorderable: true,
                sortable: true,
                selectable: true,
                columns: [{
                        editable: true,
                        encoded: true,
                        field: "Ordernum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Order Num"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "OrderDate",
                        filterable: true,
                        format: "{0:d}",
                        sortable: true,
                        title: "Ordered"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "ShipDate",
                        filterable: true,
                        format: "{0:d}",
                        sortable: true,
                        title: "Shipped"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "Carrier",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Carrier"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "SalesRep",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Sales Rep"
                    }
                ],
                dataSource: this.$parentDs
            },
            childGridOptions: {
                autoBind: false,
                pageable: {
                    pageSize: 5,
                    refresh: true
                },

                toolbar: [{
                    "name": "create",
                    "iconClass": "k-icon k-i-add"
                }],

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
                        editable: () => true,
                        encoded: true,
                        field: "Ordernum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Order Num"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Linenum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Line Num"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Itemnum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Item Num"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Price",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Price"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Qty",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Qty"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Discount",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Discount"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "ExtendedPrice",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Extended Price"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "OrderLineStatus",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Order Line Status"
                    },
                    {
                        command: [{
                                name: "edit",
                                iconClass: "k-icon k-i-edit"
                            },
                            {
                                name: "destroy",
                                iconClass: "k-icon k-i-close"
                            }
                        ],
                        title: "&nbsp;",
                        width: 250
                    }
                ],
                dataSource: this.$childDs,

                selectable: "row"

            },
            customSections: {
                top: 'views.order.order-order-line.topSection.html',
                topParent: 'views.order.order-order-line.topParentSection.html',
                topChild: 'views.order.order-order-line.topChildSection.html',
                middle: 'views.order.order-order-line.middleSection.html',
                bottom: 'views.order.order-order-line.bottomSection.html'
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
                onDataBound: (e) => {},
                onRowCreate: (e) => {
                    this._$disableGridsIteractions(e);
                },
                onRowUpdate: (e) => {
                    this._$disableGridsIteractions(e);
                },
                onRowDelete: (e) => {}
            }
        };
        this._$translate();
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

        this.$scope.$watch(() => {
            return this.$childGrid;
        }, (newValue, oldValue) => {
            if (newValue) {
                newValue.bind('dataBound', this._$enableGridsIteractions.bind(this));
                newValue.bind('cancel', this._$enableGridsIteractions.bind(this));
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
            logic: 'and',
            filters: [{
                field: 'Ordernum',
                operator: 'eq',
                value: selectedItem['Ordernum']
            }]
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
            var fields = [];
            this._$populateFieldsFromFilters(e.sender.filter().filters, fields);

            fields.forEach(function(item) {
                e.items[0].set(item.field, item.value);
            }, this);
        }
    }

    _$populateFieldsFromFilters(filters, fields) {
        filters.forEach(function(filter) {
            if (filter.field) {
                fields.push({
                    field: filter.field,
                    value: filter.value
                });
            }

            if (filter.filters) {
                this._$populateFieldsFromFilters(filter.filters, fields);
            }
        }, this);
    }

    _$translate() {
        var model = this.$model;
        this.$translate('modules.Order.views.OrderOrderLine.parentTitle')
            .then(function(parentTitle) {
                model.parentTitle = parentTitle;
            });
        this.$translate('modules.Order.views.OrderOrderLine.childTitle')
            .then(function(childTitle) {
                model.childTitle = childTitle;
            });

        this.$translate(["modules.Order.views.OrderOrderLine.parentGridColumns.Ordernum", "modules.Order.views.OrderOrderLine.parentGridColumns.OrderDate", "modules.Order.views.OrderOrderLine.parentGridColumns.ShipDate", "modules.Order.views.OrderOrderLine.parentGridColumns.Carrier", "modules.Order.views.OrderOrderLine.parentGridColumns.SalesRep"])
            .then(function(translations) {
                Object.keys(translations).forEach(function(namespacedKey) {
                    var keyParts = namespacedKey.split('.');
                    var key = keyParts[keyParts.length - 1];
                    model.parentGridOptions.columns.forEach(function(column) {
                        if (key === column.field) {
                            column.title = translations[namespacedKey];
                        }
                    });
                });
            });

        this.$translate(["modules.Order.views.OrderOrderLine.childGridColumns.Ordernum", "modules.Order.views.OrderOrderLine.childGridColumns.Linenum", "modules.Order.views.OrderOrderLine.childGridColumns.Itemnum", "modules.Order.views.OrderOrderLine.childGridColumns.Price", "modules.Order.views.OrderOrderLine.childGridColumns.Qty", "modules.Order.views.OrderOrderLine.childGridColumns.Discount", "modules.Order.views.OrderOrderLine.childGridColumns.ExtendedPrice", "modules.Order.views.OrderOrderLine.childGridColumns.OrderLineStatus", "modules.Order.views.OrderOrderLine.childGridColumns.undefined"])
            .then(function(translations) {
                Object.keys(translations).forEach(function(namespacedKey) {
                    var keyParts = namespacedKey.split('.');
                    var key = keyParts[keyParts.length - 1];
                    model.childGridOptions.columns.forEach(function(column) {
                        if (key === column.field) {
                            column.title = translations[namespacedKey];
                        }
                    });
                });
            });

        if (model.childGridOptions.messages) {
            this.$translate(["modules.Order.views.OrderOrderLine.childGridEditMessages.cancel", "modules.Order.views.OrderOrderLine.childGridEditMessages.create", "modules.Order.views.OrderOrderLine.childGridEditMessages.save", "modules.Order.views.OrderOrderLine.childGridEditMessages.canceledit", "modules.Order.views.OrderOrderLine.childGridEditMessages.destroy", "modules.Order.views.OrderOrderLine.childGridEditMessages.edit", "modules.Order.views.OrderOrderLine.childGridEditMessages.update"])
                .then(function(translations) {
                    var editMessages = {};
                    Object.keys(translations).forEach(function(namespacedKey) {
                        var keyParts = namespacedKey.split('.');
                        var key = keyParts[keyParts.length - 1];
                        editMessages[key] = translations[namespacedKey];
                    });
                    model.childGridOptions.messages.commands = editMessages;
                });
        }
    }

    _$destroy() {
        this.$parentDs.unbind('error', this._$errorHandler);
        this.$childDs.unbind('error', this._$errorHandler);
        this.$childDs.unbind('change', this._$changeHandler);

        this.$childGrid.unbind('dataBound', this._$enableGridsIteractions);
        this.$childGrid.unbind('cancel', this._$enableGridsIteractions);

        this.$deregisterLogoutListener();
        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);
    }
}

export default BaseController