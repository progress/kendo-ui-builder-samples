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

        this.$ds = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('ItemService', {
                "jsdo": "Item"
            }),

            type: "jsdo",

            pageSize: 15,

        });
        this.$ds.bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'Items',
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
                        "field": "CatPage",
                        "title": "Item",
                        "filterable": true,
                        "sortable": true,
                        "encoded": true
                    },
                    {
                        "field": "Itemnum",
                        "title": "Item Num",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "ItemName",
                        "title": "Item Name",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "Price",
                        "title": "Price",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    },
                    {
                        "field": "CatDescription",
                        "title": "Cat-Description",
                        "format": "{0}",
                        "sortable": true,
                        "filterable": true,
                        "encoded": true
                    }
                ],
                dataSource: this.$ds,
                rowTemplate: (dataItem) => {
                    return this['rowTemplate'](dataItem);
                }
            },
            customSections: {
                top: 'views.items.item-dg.topSection.html',
                middle: 'views.items.item-dg.middleSection.html',
                bottom: 'views.items.item-dg.bottomSection.html'
            },
            events: {
                onRowSelect: (e) => {

                    this['onRowSelect'](e);

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

    _$errorHandler(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$destroy() {
        this.$ds.unbind('error', this._$errorHandler);

    }
}

export default BaseController