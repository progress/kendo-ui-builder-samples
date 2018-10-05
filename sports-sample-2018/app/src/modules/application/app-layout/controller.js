///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$translationsService = $injector.get('translationsService');
        this.$dataProviderService = $injector.get('providerService');
        this.$dsService = $injector.get('dsService');
        this.$translate = $injector.get('$translate');
        this.$emitService = $injector.get('emitService');
        this.$compile = $injector.get('$compile');

        this.$dsOptions = {};
        this.$ds = {};
        this.$viewModels = {};
        this.$components = {};

        this.$grids = [];
        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        this.$showPendingChangeMessage = true;

        const that = this;
        this.$navigationDataSource = new kendo.data.HierarchicalDataSource({
            data: [{
                    name: "Order",
                    thumbnail: {
                        background: "#008886",
                        color: "#ffffff",
                        icon: "fa-edit"
                    },
                    stateName: "module.default.order",
                    translationKey: "modules.Order.label",
                    items: [{
                            name: "Orders",
                            label: "Orders",
                            stateName: "module.default.order.orders",
                            translationKey: "modules.Order.views.Orders.label"
                        },
                        {
                            name: "OrderOrderLine",
                            label: undefined,
                            stateName: "module.default.order.orderOrderLine",
                            translationKey: "modules.Order.views.OrderOrderLine.label"
                        }
                    ]
                },
                {
                    name: "Inventory",
                    thumbnail: {
                        background: "#00a8a6",
                        color: "#ffffff",
                        icon: "fa-cubes"
                    },
                    stateName: "module.default.inventory",
                    translationKey: "modules.Inventory.label",
                    items: [{
                        name: "inventory_graphical",
                        label: "Items (Graphical View)",
                        stateName: "module.default.inventory.inventoryGraphical",
                        translationKey: "modules.Inventory.views.inventory_graphical.label"
                    }]
                },
                {
                    name: "Customers",
                    thumbnail: {
                        background: "#3fb4c0",
                        color: "#ffffff",
                        icon: "fa-group"
                    },
                    stateName: "module.default.customers",
                    translationKey: "modules.Customers.label",
                    items: [{
                        name: "CustomersGraphical",
                        label: "Customers (Graphical View)",
                        stateName: "module.default.customers.customersGraphical",
                        translationKey: "modules.Customers.views.CustomersGraphical.label"
                    }]
                },
                {
                    name: "Personal",
                    thumbnail: {
                        background: "#009a98",
                        color: "#ffffff",
                        icon: "fa-user"
                    },
                    stateName: "module.default.personal",
                    translationKey: "modules.Personal.label",
                    items: [{
                        name: "FamilyGraphical",
                        label: "Family (Graphical view)",
                        stateName: "module.default.personal.familyGraphical",
                        translationKey: "modules.Personal.views.FamilyGraphical.label"
                    }]
                }
            ],
            schema: {
                model: {
                    children: 'items'
                }
            }
        });

        this.$domReady = false;

        this.$components['image0'] = {};

        this.$components['languagesDdl'] = {
            widget: null,
            options: {
                dataSource: this._$getLanguages(),
                dataTextField: 'label',
                dataValueField: 'key',
                value: this.$translationsService.getLanguage()
            },
            events: {
                onChange: (e) => {},
                onSelect: (e) => {}
            }
        };

        this.$components['userdropdown0'] = {
            widget: null,
            options: {},
        };

        this.$components['navigationpanelbar0'] = {
            widget: null,
            options: {
                dataSource: this.$navigationDataSource,
                dataTextField: 'name',
                loadOnDemand: false,
                template: data => {
                    const item = data.item;

                    if (item.hasChildren) {
                        const t = `{{ ('${item.translationKey}' | translate) ? ('modules.${item.name}.label' | translate) : ${item.name} }}`;
                        return `
                <div data-state="${item.stateName}" title="${t}">
                    <i class="fa ${item.thumbnail.icon}"></i>
                    <span class="module-text">${t}</span>
                </div>
                `;
                    }

                    const t = `{{ (('${item.translationKey}' | translate) === '${item.translationKey}') ? '${item.label || item.name}' : '${item.translationKey}' | translate }}`;

                    return `
            <div data-state="${item.stateName}">
                <a ui-sref="${item.stateName}" class="k-link view-link">
                ${t}
                </a>
            </div>
            `;
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

    _$getLanguages() {
        return [{
            "label": "English",
            "culture": "en-US",
            "order": 0,
            "key": "translations.default"
        }];
    }

    _$getDataSourceOptions(name) {
        return this.$dsOptions[name];
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
        this.$deregisterLogoutListener();

        this.$grids.forEach((grid) => {
            grid.unbind('edit', this._$disableEditButtons);
            grid.unbind('dataBound', this._$enableEditButtons);
            grid.unbind('cancel', this._$enableEditButtons);
            grid.dataSource.unbind('requestStart', this.$gridDataSourceRequestStart);
        });
        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);
    }
}

export default BaseController;