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

        this.$ds['customerDs'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('CustomerService', {
                "jsdo": "Customer"
            }),

            type: "jsdo",

            pageSize: 20,

        });
        this.$ds['customerDs'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['customerDsModel'] = this.$dsService.createPristineModel(this.$ds['customerDs']);

        this.$customSections = {
            top: 'views.grid-external-filtering.grid-external-filtering.topSection.html'
        };

        this.$domReady = false;

        this.$components['label0'] = {};

        this.$components['searchTb'] = {
            events: {
                onChange: (e) => {

                    this['changeHandler'](e);

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['grid0'] = {
            widget: null,
            options: {
                pageable: {
                    refresh: true
                },

                editable: 'readonly',

                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                columns: [{
                        "field": "Name",
                        "title": "Name",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "Address",
                        "title": "Address",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "Phone",
                        "title": "Phone",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "SalesRep",
                        "title": "SalesRep",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "State",
                        "title": "State",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "Country",
                        "title": "Country",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    }
                ],
                dataSource: this.$ds['customerDs']
            },
            events: {
                onRowSelect: (e) => {

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

        this.$ds['customerDs'].unbind('error', this._$errorHandler);

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