(function(module) {
    'use strict';

    module.exports = {};

    var path = require('path');
    var fs = require('fs');
    var META = 'meta';
    var DATA_PRODIVERS_DIR = path.join(META, 'dataProviders') ;
    var JSON_TEXT = '.json';

    var ModelBuilder = function() { };

    ModelBuilder.prototype = {

        buildRuntimeDataSource: function(model, dsMetaModel) {
            var widgetDataSource = {};
            var tableName = '';

            if (dsMetaModel) {
                widgetDataSource = {
                    type: 'jsdo',
                    transport: {
                        jsdo: dsMetaModel.resourceName
                    },
                    pageSize: model.pageSize || 20
                };

                if (!dsMetaModel.clientSideProcessing) {
                    widgetDataSource.serverPaging = true;
                    widgetDataSource.serverFiltering = true;
                    widgetDataSource.serverSorting = true;
                    if (dsMetaModel.countFnName) {
                        widgetDataSource.transport.countFnName = dsMetaModel.countFnName;
                    }
                }

                if (dsMetaModel.resourceName != dsMetaModel.tableName) {
                    tableName = dsMetaModel.tableName.replace((dsMetaModel.resourceName + '.'), '');
                }

                if (tableName) {
                    widgetDataSource.transport.tableRef = tableName;
                }
            }

            model.dataSource = widgetDataSource;
        },

        buildDesignTimeDataSource: function(model) {
            var widgetDataSource = {};
            var dummyData = [{
                field: 'field1'
            },{
                field: 'field2'
            }, {
                field: 'field3'
            }];

            var filterFn = (column) => { if (column.field) { return column; } };
            var columns =  model.columns.length ? model.columns.filter(filterFn) : dummyData;

            widgetDataSource.data = [];

            // Generate dummy data source
            for (var i = 0; i < 10; i++) {
                var column = {};
                for (var j = 0; j < columns.length; j++) {
                    column[columns[j].field] = columns[j].field + i;
                }
                widgetDataSource.data.push(column);
            }

            model.dataSource = widgetDataSource;
        },

        getDataSourceMetaModel: function(dataProvider, dataSource, metaPath) {
            var metaModel = null;

            if (dataProvider && dataSource) {
                var dsPath = path.join(metaPath, DATA_PRODIVERS_DIR, dataProvider + JSON_TEXT);
                if (fs.existsSync(dsPath)) {
                    var dataProviderModel = require(dsPath);
                    metaModel = dataProviderModel.children.find(function(o) { return o.name === dataSource; });
                }
            }

            return metaModel;
        },

        buildViewModel: function(viewDataSourceMetaModel, metaPath) {
            var viewModel = {};
            var dataSourceMetaModel = this.getDataSourceMetaModel(viewDataSourceMetaModel.dataProviderName, viewDataSourceMetaModel.dataSourceName, metaPath);
            if (dataSourceMetaModel) {
                dataSourceMetaModel.fields.forEach(function(f) {
                    if (f.defaultValue !== undefined) {
                        viewModel[f.name] = f.defaultValue;
                    }
                });
            }
            return viewModel;
        }
    };

    module.exports = new ModelBuilder();

})(module);
