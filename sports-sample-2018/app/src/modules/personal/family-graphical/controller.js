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

        var that = this;

        this.$dsOptions['FamilyList'] = {
            batch: true,
            transport: {
                jsdo: "Family"
            },
            type: "jsdo",
            pageSize: 20,
        }
        this.$ds['FamilyList'] = new kendo.data.DataSource(this._$getDataSourceOptions('FamilyList'));
        this.$ds['FamilyList'].bind('error', this._$errorHandler.bind(this));

        this.$viewModels['FamilyListModel'] = this.$dsService.createPristineModel(this.$ds['FamilyList']);

        this.$customSections = {
            top: 'views.personal.family-graphical.topSection.html'
        };

        this.$domReady = false;

        this.$components['comboBox'] = {
            widget: null,
            options: {
                dataSource: this.$ds['FamilyList'],
                dataTextField: "RelativeName",
                dataValueField: "RelativeName",
                valuePrimitive: false,
                cascadeFromField: 'RelativeName',
                filter: "contains"
            },
            events: {
                onChange: (e) => {},
                onSelect: (e) => {},
                onFilter: (e) => {}
            },
            validation: {
                required: false
            }
        };

        this.$components['FamilyGrid'] = {
            widget: null,
            options: {
                pageable: {
                    refresh: true
                },
                toolbar: [{
                    "name": "create",
                    "iconClass": "k-icon k-i-add"
                }],
                messages: {
                    commands: {
                        "cancel": "Cancel changes",
                        "create": "Add a family member",
                        "save": "Save changes",
                        "canceledit": "Cancel",
                        "destroy": "Delete",
                        "edit": "Edit",
                        "update": "Update"
                    }
                },
                editable: 'popup',

                selectable: "multiple, row",
                filterable: false,
                groupable: true,
                resizable: true,
                reorderable: true,
                sortable: true,
                columns: [{
                        editable: () => true,
                        encoded: true,
                        field: "RelativeName",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Relative Name"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Relation",
                        filterable: true,
                        format: "",
                        sortable: true,
                        title: "Relation"
                    },
                    {
                        editable: () => true,
                        encoded: true,
                        field: "Birthdate",
                        filterable: true,
                        format: "{0:d}",
                        sortable: true,
                        title: "Birthdate"
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
                dataSource: this.$ds['FamilyList']
            },
            events: {
                onRowSelect: (e) => {},
                onDataBound: (e) => {},
                onRowCreate: (e) => {},
                onRowUpdate: (e) => {},
                onRowDelete: (e) => {}
            }
        };

        var currentComponent = this.$components['FamilyGrid'];

        if (currentComponent.options.messages) {
            this.$translate(["modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.cancel", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.create", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.save", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.canceledit", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.destroy", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.edit", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.editMessages.update"])
                .then(function(translations) {
                    var editMessages = {};
                    Object.keys(translations).forEach(function(namespacedKey) {
                        var keyParts = namespacedKey.split('.');
                        var key = keyParts[keyParts.length - 1];
                        editMessages[key] = translations[namespacedKey];
                    });
                    currentComponent.options.messages.commands = editMessages;
                });
        }

        this.$translate(["modules.Personal.views.FamilyGraphical.components.FamilyGrid.columns.RelativeName", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.columns.Relation", "modules.Personal.views.FamilyGraphical.components.FamilyGrid.columns.Birthdate"])
            .then(function(translations) {
                Object.keys(translations).forEach(function(namespacedKey) {
                    var keyParts = namespacedKey.split('.');
                    var key = keyParts[keyParts.length - 1];
                    currentComponent.options.columns.forEach(function(column) {
                        if (key === column.field) {
                            column.title = translations[namespacedKey];
                        }
                    });
                });
            });

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
        this.$ds['FamilyList'].unbind('error', this._$errorHandler);

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