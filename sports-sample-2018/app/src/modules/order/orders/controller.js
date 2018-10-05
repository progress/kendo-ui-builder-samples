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

        this.$dsOptions = {};
        this.$ds = {};

        this.$primeDSName = '$primeDS';
        this.$dsOptions[this.$primeDSName] = {
            transport: {
                jsdo: "Orders"
            },
            type: "jsdo",
            pageSize: 15,
        };
        this.$ds[this.$primeDSName] = new kendo.data.DataSource(this._$getDataSourceOptions(this.$primeDSName));
        this.$ds[this.$primeDSName].bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'Orders (Basic Grid)',
            options: {
                pageable: {
                    pageSize: 15,
                    refresh: true
                },
                editable: 'readonly',
                selectable: true,
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
                        title: "Order Number"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "CustNum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Customer Number"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "OrderDate",
                        filterable: true,
                        format: "{0:d}",
                        sortable: true,
                        title: "Date Ordered"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "OrderStatus",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Order Status"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "ShipDate",
                        filterable: true,
                        format: "{0:d}",
                        sortable: true,
                        title: "Date Shipped"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "PromiseDate",
                        filterable: true,
                        format: "{0:d}",
                        sortable: true,
                        title: "Date Promised"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Carrier",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Carrier"
                    }
                ],
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.order.orders.topSection.html',
                middle: 'views.order.orders.middleSection.html',
                bottom: 'views.order.orders.bottomSection.html'
            },
            events: {
                onRowSelect: (e) => {
                    this['onRowSelect'](e);
                },
                onRowCreate: (e) => {},
                onRowUpdate: (e) => {},
                onRowDelete: (e) => {}
            }
        };
        this._$translate();
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
                this.includeContentError();
            }
        });

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$getDataSourceOptions(name) {
        return this.$dsOptions[name];
    }

    _$errorHandler(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$requestStartHandler(e) {
        if (e.type !== 'update' &&
            e.type !== 'create' &&
            e.type !== 'submit' &&
            e.type !== 'destroy' &&
            e.sender.hasChanges() &&
            confirm(that.$pendingChangeMessage)) {
            e.preventDefault();
        }
    }

    _$translate() {
        var model = this.$model;
        this.$translate('modules.Order.views.Orders.title')
            .then(function(title) {
                model.title = title;
            });

        this.$translate(["modules.Order.views.Orders.columns.Ordernum", "modules.Order.views.Orders.columns.CustNum", "modules.Order.views.Orders.columns.OrderDate", "modules.Order.views.Orders.columns.OrderStatus", "modules.Order.views.Orders.columns.ShipDate", "modules.Order.views.Orders.columns.PromiseDate", "modules.Order.views.Orders.columns.Carrier"])
            .then(function(translations) {
                Object.keys(translations).forEach(function(namespacedKey) {
                    var keyParts = namespacedKey.split('.');
                    var key = keyParts[keyParts.length - 1];
                    model.options.columns.forEach(function(column) {
                        if (key === column.field) {
                            column.title = translations[namespacedKey];
                        }
                    });
                });
            });

        if (model.options.messages) {
            this.$translate([])
                .then(function(translations) {
                    var editMessages = {};
                    Object.keys(translations).forEach(function(namespacedKey) {
                        var keyParts = namespacedKey.split('.');
                        var key = keyParts[keyParts.length - 1];
                        editMessages[key] = translations[namespacedKey];
                    });
                    model.options.messages.commands = editMessages;
                });
        }
    }

    _$destroy() {

        this.$ds[this.$primeDSName].unbind('error', this._$errorHandler);
    }
}

export default BaseController