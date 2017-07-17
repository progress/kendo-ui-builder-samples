///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function service() {

    function DataSourceService() {}

    DataSourceService.prototype = {
        createPristineModel: function(dataSource) {
            return dataSource.reader.model ? new dataSource.reader.model() : {};
        },

        create: function(dataSource, model, options) {
            if (options && options.index !== undefined) {
                model = kendo.proxyModelSetters(dataSource.insert(index, model));
            } else {
                model = kendo.proxyModelSetters(dataSource.add(model));
            }

            if (options && options.sync) {
                dataSource.sync();
            }

            return model;
        },

        remove: function(dataSource, model, options) {
            dataSource.remove(model);

            if (options && options.sync) {
                dataSource.sync();
            }

            return new dataSource.reader.model();
        },

        save: function(dataSource) {
            dataSource.sync();
        },

        cancel: function(dataSource, model) {
            var idProperty = dataSource.options.schema.model.id;
            var pristineModel;

            function dataSourceChange(e) {
                var items = e.items || [];
                for (var i = 0; i < items.length; i++) {
                    if (model[idProperty] === items[i][idProperty]) {
                        pristineModel = items[i];
                        break;
                    }
                }
            };

            dataSource.bind('change', dataSourceChange, true);
            dataSource.cancelChanges();

            return pristineModel ? kendo.proxyModelSetters(pristineModel) : new dataSource.reader.model();
        },

        extractErrorMessage: function(e) {
            let message = '';
            const dataSource = e.sender;

            if (dataSource.transport.jsdo) {
                const jsdo = dataSource.transport.jsdo;
                const tableRef = dataSource.transport.tableRef;
                const table = tableRef ? jsdo[tableRef] : jsdo;
                const errors = table.getErrors();

                message += e.errorThrown.message;
                message += "<ul>";

                for (var i = 0; i < errors.length; i++) {
                    message += '<li>' + errors[i].error + '</li>';
                }
                message += "</ul>";
            } else {
                message += e.status;
                message += "<ul>";
                message += '<li>' + e.errorThrown ? e.errorThrown.toString() : 'Error has occurred' + '</li>';
                message += "</ul>";
            }

            return message;
        }
    };

    return new DataSourceService();
}

export default service;