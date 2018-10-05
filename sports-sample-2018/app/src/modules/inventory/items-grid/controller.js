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
                jsdo: "Items"
            },
            type: "jsdo",
            pageSize: 15,
        };
        this.$ds[this.$primeDSName] = new kendo.data.DataSource(this._$getDataSourceOptions(this.$primeDSName));
        this.$ds[this.$primeDSName].bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'Items (grid view)',
            options: {
                pageable: {
                    pageSize: 15,
                    refresh: true
                },
                toolbar: [{
                    "name": "create",
                    "iconClass": "k-icon k-i-add"
                }],
                messages: {
                    commands: {}
                },
                editable: 'popup',
                selectable: true,
                filterable: true,
                groupable: true,
                resizable: true,
                reorderable: true,
                sortable: true,
                columns: [{
                        editable: () => true,
                        encoded: true,
                        field: "Itemnum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Item Number"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "ItemName",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Item Name"
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
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.inventory.items-grid.topSection.html',
                middle: 'views.inventory.items-grid.middleSection.html',
                bottom: 'views.inventory.items-grid.bottomSection.html'
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
        this.$translate('modules.Inventory.views.itemsGrid.title')
            .then(function(title) {
                model.title = title;
            });

        this.$translate(["modules.Inventory.views.itemsGrid.columns.Itemnum", "modules.Inventory.views.itemsGrid.columns.ItemName", "modules.Inventory.views.itemsGrid.columns.Price", "modules.Inventory.views.itemsGrid.columns.undefined"])
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
            this.$translate(["modules.Inventory.views.itemsGrid.editMessages.cancel", "modules.Inventory.views.itemsGrid.editMessages.create", "modules.Inventory.views.itemsGrid.editMessages.save", "modules.Inventory.views.itemsGrid.editMessages.canceledit", "modules.Inventory.views.itemsGrid.editMessages.destroy", "modules.Inventory.views.itemsGrid.editMessages.edit", "modules.Inventory.views.itemsGrid.editMessages.update"])
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