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

        this.$ds['CustomerDs'] = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('Customers', {
                "jsdo": "Customer"
            }),

            type: "jsdo",

            pageSize: 5,

        });
        this.$ds['CustomerDs'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['CustomerDsModel'] = this.$dsService.createPristineModel(this.$ds['CustomerDs']);

        this.$customSections = {
            top: 'views.customer-crud.list-view-external-form.topSection.html'
        };

        this.$domReady = false;

        this.$components['listview'] = {
            widget: null,
            options: {

                selectable: "Single",

                dataSource: this.$ds['CustomerDs'],
                template: (dataItem) => {
                    return kendo.template(angular.element("#customerTemplate").html())(dataItem);
                }
            },
            events: {
                onChange: (e) => {

                },
                onCancel: (e) => {

                },
                onDataBound: (e) => {

                    this['dataBoundHandler'](e);

                },
                onEdit: (e) => {

                },
                onRemove: (e) => {

                },
                onSave: (e) => {

                }
            }
        };

        this.$components['customhtml1'] = {
            options: {
                html: "&lt;hr&gt;"
            }
        };

        this.$components['newButton'] = {
            widget: null,
            options: {
                content: "New",
                primary: false
            },
            events: {
                onClick: (e) => {

                    this['newHandler'](e);

                }
            }
        };

        this.$components['save'] = {
            widget: null,
            options: {
                content: "Save",
                primary: false
            },
            events: {
                onClick: (e) => {

                    this['saveHandler'](e);

                }
            }
        };

        this.$components['delete'] = {
            widget: null,
            options: {
                content: "Delete",
                primary: false
            },
            events: {
                onClick: (e) => {

                    this['deleteHandler'](e);

                }
            }
        };

        this.$components['cancel'] = {
            widget: null,
            options: {
                content: "Cancel",
                primary: false
            },
            events: {
                onClick: (e) => {

                    this['cancelHandler'](e);

                }
            }
        };

        this.$components['customhtml0'] = {
            options: {
                html: "&lt;hr&gt;"
            }
        };

        this.$components['label0'] = {};

        this.$components['custNum'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "n0",
                decimals: 0,
                placeholder: "Enter Cust Num",

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

        this.$components['label1'] = {};

        this.$components['name'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label2'] = {};

        this.$components['address'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label3'] = {};

        this.$components['phone'] = {
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

        this.$components['label4'] = {};

        this.$components['salesRep'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label5'] = {};

        this.$components['balance'] = {
            widget: null,
            options: {
                downArrowText: "",
                placeholder: "Enter Balance",

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

        this.$components['label6'] = {};

        this.$components['state'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['label7'] = {};

        this.$components['country'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
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

        this.$ds['CustomerDs'].unbind('error', this._$errorHandler);

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