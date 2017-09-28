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
        this.$viewModels = {
            formModel: {},
            fkeyModels: {}
        }

        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        this.$window = $injector.get('$window');

        this.$ds = {};
        this.$primeDSName = '$primeDS';

        this.$ds[this.$primeDSName] = new kendo.data.DataSource({
            "transport": this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "CustomerOrders",
                "tableRef": "ttCustomer"
            }),

            "type": "jsdo",

            "pageSize": 10,

        });
        this.$ds[this.$primeDSName]
            .bind('sync', this._$syncHandler.bind(this))
            .bind('error', this._$errorHandler.bind(this))
            .bind('requestStart', this._$requestStartHandler.bind(this));

        var that = this;

        this.$viewModels.fkeyModels['$cachedttStateFK1DSModel'] = {};
        this.$ds['ttStateFK1DS'] = new kendo.data.DataSource({
            "transport": this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "State"
            }),

            "type": "jsdo",

            change: function(e) {
                var ds = e.sender;
                var view = ds.view();
                if (ds.filter() && ds.filter().filters.length > 0) {
                    if (view.length > 0) {
                        that.$viewModels.fkeyModels['$cachedttStateFK1DSModel'] = view[0];
                    } else {
                        that.$viewModels.fkeyModels['$cachedttStateFK1DSModel'] = {};
                    }
                } else {
                    that.$scope.$applyAsync(function() {
                        that.$viewModels.fkeyModels['ttStateFK1DSModel'] = that.$viewModels.fkeyModels['$cachedttStateFK1DSModel'];
                    });
                }
            }
        });
        this.$ds['ttStateFK1DS']
            .bind('error', this._$errorHandlerForeignKeys.bind(this));

        this._$createPristineModel('ttStateFK1DS');
        this._$watchForeignKeyModel('ttStateFK1DSModel', 'State', 'State');

        this.$viewModels.fkeyModels['$cachedttSalesRepFK1DSModel'] = {};
        this.$ds['ttSalesRepFK1DS'] = new kendo.data.DataSource({
            "transport": this.$dataProviderService.getTransport('SportsService', {
                "jsdo": "SalesRep"
            }),

            "type": "jsdo",

            change: function(e) {
                var ds = e.sender;
                var view = ds.view();
                if (ds.filter() && ds.filter().filters.length > 0) {
                    if (view.length > 0) {
                        that.$viewModels.fkeyModels['$cachedttSalesRepFK1DSModel'] = view[0];
                    } else {
                        that.$viewModels.fkeyModels['$cachedttSalesRepFK1DSModel'] = {};
                    }
                } else {
                    that.$scope.$applyAsync(function() {
                        that.$viewModels.fkeyModels['ttSalesRepFK1DSModel'] = that.$viewModels.fkeyModels['$cachedttSalesRepFK1DSModel'];
                    });
                }
            }
        });
        this.$ds['ttSalesRepFK1DS']
            .bind('error', this._$errorHandlerForeignKeys.bind(this));

        this._$createPristineModel('ttSalesRepFK1DS');
        this._$watchForeignKeyModel('ttSalesRepFK1DSModel', 'SalesRep', 'SalesRep');

        this.$model = {
            title: 'customers',
            newTitle: 'New',
            editTitle: 'Edit',
            editMode: 'Edit',
            confirmRemove: true,
            formOptions: {
                dataSource: this.$ds[this.$primeDSName]
            },
            gridOptions: {
                pageable: {
                    pageSize: 10,
                    refresh: true
                },
                filterable: true,
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
                        "template": "<div class='customer-name'>#: CustNum #</div><img src='images/#if (CustNum < 12) {##: CustNum##} else { #unknown#}#.jpg' alt='#: CustNum #'/></img>",
                        "title": "CustNum",
                        "width": 100
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
                        "field": "State",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "State"
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
                    }
                ],
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.sales.customer-list.topSection.html',
                middle: 'views.sales.customer-list.middleSection.html',
                bottom: 'views.sales.customer-list.bottomSection.html'
            },
            events: {
                onRowSelect: (e) => {

                    if (e.fromView) {
                        this['onRowSelect'](e);
                    }

                },
                onDataBound: (e) => {

                }
            }
        };
        this.$grid = null;
        this.$requestType = '';
        this.$showForm = false;
        this.$components = {};

        this.$components['ctl502'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                placeholder: "",

                step: 1,

                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {

                },
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl504'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl506'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl518'] = {
            widget: null,
            options: {
                dataSource: this.$ds['ttStateFK1DS'],
                dataTextField: "State",
                dataValueField: "State",
                valuePrimitive: false,
                filter: "none"
            },
            events: {
                onChange: (e) => {

                },
                onSelect: (e) => {

                },
                onFilter: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl508'] = {
            widget: null,
            options: {

                mask: "(999) 000-0000",

                value: ""
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl512'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "c",
                placeholder: "",

                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl516'] = {
            widget: null,
            options: {
                dataSource: this.$ds['ttSalesRepFK1DS'],
                dataTextField: "SalesRep",
                dataValueField: "SalesRep",
                valuePrimitive: false,
                filter: "none"
            },
            events: {
                onChange: (e) => {

                },
                onSelect: (e) => {

                },
                onFilter: (e) => {

                }
            },
            validation: {
                required: false
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

        this.$scope.$on("kendoWidgetCreated", (event, widget) => {
            if (widget instanceof kendo.ui.Grid) {
                widget.wrapper.on('click', '.k-grid-content tr[data-uid]', this._$onChangeEvent.bind(this));
            }
        });

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$validatorOptions = {
            errorTemplate: '<p class="input__required">#=message#</p>'
        };

        this.$scope.$on('$destroy', this._$destroy.bind(this));
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

        if (this.$insertInProcess) {
            this.$showForm = false;
        } else {
            this.$showForm = this.$model.editMode === 'Read-Only to Edit';
        }

        this.$updateInProcess = this.$insertInProcess = false;
    }

    _$back(e) {
        this._$cancel();
        this.$showForm = false;
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
        const data = this.$grid.dataSource.data();
        this.$viewModels.formModel = kendo.proxyModelSetters(data[data.length - 1]);
        this.$selectedId = null;
        this.$showForm = true;
        this.$insertInProcess = true;
        this.$updateInProcess = false;
    }

    _$delete() {
        const removeRow = () => {
            this.$grid.removeRow(this.$grid.select().first());
            this.$grid.saveChanges();
            this.$deleteInProcess = true;
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

    _$restoreSelection() {
        const dataItem = this.$grid.dataSource.get(this.$selectedId);

        if (dataItem) {
            const row = angular.element("[data-uid='" + dataItem.uid + "']");
            if (row.length) {
                this.$grid.select(row);
            } else {
                this.$grid.select('tr:eq(0)');
            }
        } else {
            this.$grid.select('tr:eq(0)');
        }
    }

    _$createSelection() {
        this.$viewModels.formModel = kendo.proxyModelSetters(this.$grid.dataItem(this.$grid.select()));
        this.$selectedId = this.$viewModels.formModel.id;

        this._$createPristineModel('ttStateFK1DS');

        this.$ds['ttStateFK1DS'].query({
            filter: {
                field: 'State',
                operator: "eq",
                value: this.$viewModels.formModel['State']
            }
        }).then(() => {
            this.$ds['ttStateFK1DS'].filter({});
        });

        this._$createPristineModel('ttSalesRepFK1DS');

        this.$ds['ttSalesRepFK1DS'].query({
            filter: {
                field: 'SalesRep',
                operator: "eq",
                value: this.$viewModels.formModel['SalesRep']
            }
        }).then(() => {
            this.$ds['ttSalesRepFK1DS'].filter({});
        });

    }

    _$restoreState() {
        this.$grid.cancelChanges();
        this._$restoreSelection();
        this._$createSelection();
    }

    _$requestStartHandler(e) {
        this.$requestType = e.type;
    }

    _$onChangeEvent(e) {
        this.$scope.$evalAsync(() => {
            this._$createSelection();

            if (this.$model.editMode === 'Edit') {
                this.$updateInProcess = true;
            }

            this.$showForm = true;
        });

        this.$model.events.onRowSelect({
            sender: this.$grid,
            fromView: true
        });
    }

    _$syncHandler(e) {
        this.$scope.$evalAsync(() => {
            this._$restoreSelection();
            if (this.$insertInProcess || this.$deleteInProcess) {
                this.$showForm = false;
            } else {
                this.$showForm = this.$model.editMode === 'Read-Only to Edit';
            }
            this.$updateInProcess = this.$insertInProcess = this.$deleteInProcess = false;
        });
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
                        .unbind('error', this._$errorHandler);
                }
            }
        }

        this.$grid.wrapper.off('click', this._$onChangeEvent);

        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController