///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict'

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$dataProviderService = $injector.get('providerService');
        this.$dsService = $injector.get('dsService');
        this.$translate = $injector.get('$translate');
        this.$viewModels = {
            formModel: {},
            fkeyModels: {}
        }
        this.$dsOptions = {};
        this.$ds = {};
        this.$primeDSName = '$primeDS';
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        this.$window = $injector.get('$window');
        this.$emitService = $injector.get('emitService');
        this.$showPendingChangeMessage = true;

        this.$dsOptions[this.$primeDSName] = {
            transport: {
                jsdo: "OrderLine"
            },
            type: "jsdo",
            pageSize: 15,
        };
        this.$ds[this.$primeDSName] = new kendo.data.DataSource(this._$getDataSourceOptions(this.$primeDSName));
        this.$ds[this.$primeDSName]
            .bind('sync', this._$syncHandler.bind(this))
            .bind('error', this._$errorHandler.bind(this))
            .bind('change', this._$changeHandler.bind(this))
            .bind('requestStart', this._$requestStartHandler.bind(this));

        var that = this;

        this.$model = {
            title: 'Order Lines',
            newTitle: 'New',
            editTitle: 'Edit',
            editMode: 'Read-Only to Edit',
            confirmRemove: true,
            formOptions: {
                dataSource: this.$ds[this.$primeDSName]
            },
            gridOptions: {
                pageable: {
                    pageSize: 15,
                    refresh: true
                },
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                selectable: true,
                columns: [{
                        editable: true,
                        encoded: true,
                        field: "Ordernum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Order Number"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "Linenum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Line Number"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "Itemnum",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Item Number"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "Price",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Price"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "Qty",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Quantity"
                    },
                    {
                        editable: true,
                        encoded: true,
                        field: "OrderLineStatus",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Order Line Status"
                    }
                ],
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.order.order-lines.topSection.html',
                middle: 'views.order.order-lines.middleSection.html',
                bottom: 'views.order.order-lines.bottomSection.html'
            },
            events: {
                onRowSelect: (e) => {
                    if (e.fromView) {
                        this['onRowSelect'](e);
                    }
                },
                onDataBound: (e) => {}
            }
        };
        this.$grid = null;
        this.$requestType = '';
        this.$components = {};

        this.$domReady = false;

        this.$components['ctl31'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl33'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl35'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl37'] = {
            widget: null,
            options: {
                downArrowText: "",
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl39'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl41'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl43'] = {
            widget: null,
            options: {
                downArrowText: "",
                step: 1,
                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {},
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl45'] = {
            events: {
                onChange: (e) => {}
            },
            validation: {
                required: false
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

        this.$scope.$on("kendoWidgetCreated", (event, widget) => {
            if (widget instanceof kendo.ui.Grid) {
                widget.one('dataBound', this._$dataBoundHandler.bind(this));
                widget.wrapper.on('click', '.k-grid-content tr[data-uid]', this._$onChangeEvent.bind(this));
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

        this.$validatorOptions = {
            errorTemplate: '<p class="input__required">#=message#</p>'
        };

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$getDataSourceOptions(name) {
        return this.$dsOptions[name];
    }

    _$routeChange(event) {
        if (this.$ds[this.$primeDSName].hasChanges() && confirm(this.$pendingChangeMessage)) {
            event.preventDefault();
        }

        return;
    }

    _$beforeunloadHandler(e) {
        if (this.$ds[this.$primeDSName].hasChanges()) {
            return this.$pendingChangeMessage;
        }
    }

    _$createPristineModel(dsName) {
        this.$viewModels.fkeyModels[dsName + 'Model'] = this.$dsService.createPristineModel(this.$ds[dsName]);
    }

    _$watchForeignKeyModel(modelName, valueField, parentValueField) {
        var that = this;
        this.$scope.$watch(function() {
            return that.$viewModels.fkeyModels[modelName][parentValueField];
        }, function(newValue, oldValue) {
            var formModel = that.$viewModels.formModel;
            var fkeyModels = that.$viewModels.fkeyModels;

            if (newValue && formModel[valueField] !== fkeyModels[modelName][parentValueField]) {
                formModel[valueField] = fkeyModels[modelName][parentValueField];
            }
        });
    }

    _$restoreSelection() {
        let dataItem = this.$grid.dataSource.get(this.$selectedId);
        if (dataItem) {
            var row = angular.element("[data-uid='" + dataItem.uid + "']");
            if (row.length) {
                this.$grid.select(row);
            } else {
                this.$grid.select('tr[data-uid]:eq(0)');
            }
        } else {
            this.$grid.select('tr[data-uid]:eq(0)');
        }
    }

    _$createSelection() {
        this.$viewModels.formModel = kendo.proxyModelSetters(this.$grid.dataItem(this.$grid.select()));
        this.$selectedId = this.$viewModels.formModel.id;

    }

    _$restoreState() {
        this.$grid.cancelChanges();
        this._$restoreSelection();
        this._$createSelection();
    }

    _$errorHandler(e) {
        this._$showErrorMessage(e);

        if (!this.$insertInProcess) {
            if (this.$requestType != 'update') {
                this._$restoreState();
            }
        }
    }

    _$errorHandlerForeignKeys(e) {
        this._$showErrorMessage(e);
    }

    _$showErrorMessage(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$syncHandler(e) {
        this.$scope.$evalAsync(() => {
            this._$restoreSelection();
            this._$createSelection();
            this.$updateInProcess = this.$insertInProcess = false;
        });
    }

    _$dataBoundHandler(e) {
        this.$scope.$evalAsync(() => {
            this.$grid.select('tr[data-uid]:eq(0)');
            this.$model.events.onRowSelect({
                sender: this.$grid,
                fromView: true
            });
            this._$createSelection();
        });
    }

    _$changeHandler(e) {
        if (e.action != 'add' && e.action != 'remove' && this.$grid) {
            this.$scope.$evalAsync(() => {
                this._$restoreSelection();
                this._$createSelection();
            });
        }
    }

    _$requestStartHandler(e) {
        this.$requestType = e.type;
    }

    _$onChangeEvent(e) {
        this.$scope.$evalAsync(() => {
            this._$createSelection();
        });

        this.$model.events.onRowSelect({
            sender: this.$grid,
            fromView: true
        });
    }

    _$edit(e) {
        this.$updateInProcess = true;
    }

    _$save(e) {
        if (this.$validator.validate()) {
            this.$grid.saveChanges();
        }
    }

    _$cancel(e) {
        this._$restoreState();
        this.$updateInProcess = this.$insertInProcess = false;
    }

    _$insert() {
        for (var property in this.$ds) {
            if (this.$ds.hasOwnProperty(property)) {
                if (property !== this.$primeDSName) {
                    this._$createPristineModel(property);
                    var cachedPropertyName = '$cached' + property + 'Model';
                    this.$viewModels.fkeyModels[cachedPropertyName] = {};
                }
            }
        }
        this.$grid.dataSource.add({});
        var data = this.$grid.dataSource.data();
        this.$viewModels.formModel = kendo.proxyModelSetters(data[data.length - 1]);
        this.$selectedId = null;
        this.$insertInProcess = true;
        this.$updateInProcess = false;
    }

    _$delete() {
        const removeRow = () => {
            this.$grid.removeRow(this.$grid.select().first());
            this.$grid.saveChanges();
        }

        if (this.$model.confirmRemove) {
            this.$scope.$emit('dialog', {
                title: 'Are you sure you want to delete this record?',
                hint: 'The record will be permanently removed.',
                okButton: {
                    handler: removeRow
                }
            });
        } else {
            removeRow();
        }
    }

    _$translate() {
        var model = this.$model;
        this.$translate('modules.Order.views.OrderLines.title')
            .then(function(title) {
                model.title = title;
            });

        this.$translate('modules.Order.views.OrderLines.newTitle')
            .then(function(newTitle) {
                model.newTitle = newTitle;
            });

        this.$translate('modules.Order.views.OrderLines.editTitle')
            .then(function(editTitle) {
                model.editTitle = editTitle;
            });

        this.$translate(["modules.Order.views.OrderLines.columns.Ordernum", "modules.Order.views.OrderLines.columns.Linenum", "modules.Order.views.OrderLines.columns.Itemnum", "modules.Order.views.OrderLines.columns.Price", "modules.Order.views.OrderLines.columns.Qty", "modules.Order.views.OrderLines.columns.OrderLineStatus"])
            .then(function(translations) {
                Object.keys(translations).forEach(function(namespacedKey) {
                    var keyParts = namespacedKey.split('.');
                    var key = keyParts[keyParts.length - 1];
                    model.gridOptions.columns.forEach(function(column) {
                        if (key === column.field) {
                            column.title = translations[namespacedKey];

                        }
                    });
                });
            });
    }

    _$destroy() {
        for (var property in this.$ds) {
            if (this.$ds.hasOwnProperty(property)) {
                if (property === this.$primeDSName) {
                    this.$ds[property]
                        .unbind('sync', this._$syncHandler)
                        .unbind('error', this._$errorHandler)
                        .unbind('change', this._$changeHandler)
                        .unbind('requestStart', this._$requestStartHandler);
                } else {
                    this.$ds[property]
                        .unbind('error', this._$errorHandlerForeignKeys);
                }
            }
        }

        this.$grid.wrapper.off('click', this._$onChangeEvent);

        this.$deregisterLogoutListener();
        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController