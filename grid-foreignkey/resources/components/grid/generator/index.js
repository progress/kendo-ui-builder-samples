(function(module) {
    'use strict';

    var pretty = require('js-object-pretty-print').pretty;
    var mb = require('./../../../services/model-builder.js');

    module.exports = {
        prepareRuntimeModel: function(metaModel, metaPath) {
            var dataSourceMetaModel = mb.getDataSourceMetaModel(metaModel.dataProvider, metaModel.dataSource, metaPath);
            mb.buildRuntimeDataSource(metaModel, dataSourceMetaModel);

            metaModel.columns.map(function(column) {
                if (column.format === '{0}') {
                    delete column.format;
                }
            });

            this._prepareModel(metaModel);
        },

        prepareDesigntimeModel: function(metaModel, metaPath) {
            mb.buildDesignTimeDataSource(metaModel);
            this._prepareModel(metaModel);
        },

        _prepareModel: function(model) {
            if (model.editable && model.editable !== 'None') {
                var index = model.columns.length;

                model.columns.splice(index, 0, {
                    command: ['edit', 'destroy'],
                    title: '&nbsp;',
                    width: '250px'
                });

                model.toolbar = pretty(['create'], 12, 'JSON', true);
            }

            model.columns = pretty(model.columns, 12, 'JSON', true);
            model.dataSource = pretty(model.dataSource, 12, 'JSON', true);
        }
    };
})(module);
