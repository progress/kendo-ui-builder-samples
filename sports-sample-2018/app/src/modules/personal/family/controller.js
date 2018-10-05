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
                jsdo: "Family"
            },
            type: "jsdo",
            pageSize: 15,
        };
        this.$ds[this.$primeDSName] = new kendo.data.DataSource(this._$getDataSourceOptions(this.$primeDSName));
        this.$ds[this.$primeDSName].bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'Family (Grid view)',
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
                    }
                ],
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.personal.family.topSection.html',
                middle: 'views.personal.family.middleSection.html',
                bottom: 'views.personal.family.bottomSection.html'
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
        this.$translate('modules.Personal.views.Family.title')
            .then(function(title) {
                model.title = title;
            });

        this.$translate(["modules.Personal.views.Family.columns.RelativeName", "modules.Personal.views.Family.columns.Relation", "modules.Personal.views.Family.columns.Birthdate"])
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