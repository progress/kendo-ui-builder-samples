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
                jsdo: "Customer"
            },
            type: "jsdo",
            pageSize: 20,
        };
        this.$ds[this.$primeDSName] = new kendo.data.DataSource(this._$getDataSourceOptions(this.$primeDSName));
        this.$ds[this.$primeDSName].bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'Customers',
            options: {
                pageable: {
                    pageSize: 20,
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
                        field: "CustNum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        template: "",
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
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Country"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Phone",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Phone"
                    }
                ],
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.customers.customers.topSection.html',
                middle: 'views.customers.customers.middleSection.html',
                bottom: 'views.customers.customers.bottomSection.html'
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
        this.$translate('modules.Customers.views.Customers.title')
            .then(function(title) {
                model.title = title;
            });

        this.$translate(["modules.Customers.views.Customers.columns.CustNum", "modules.Customers.views.Customers.columns.Name", "modules.Customers.views.Customers.columns.Country", "modules.Customers.views.Customers.columns.Phone"])
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