(function(module) {
    'use strict';

    var pretty = require('js-object-pretty-print').pretty;
    var mb = require('./../../../services/model-builder.js');

    module.exports = {
        prepareRuntimeModel: function(metaModel, metaPath) {
            var dataSourceMetaModel = mb.getDataSourceMetaModel(metaModel.dataProvider, metaModel.dataSource, metaPath);
            mb.buildRuntimeDataSource(metaModel, dataSourceMetaModel);
            this._prepareModel(metaModel);
        },

        prepareDesigntimeModel: function(metaModel, metaPath) {
            mb.buildDesignTimeDataSource(metaModel);
            this._prepareModel(metaModel);
        },

        _prepareModel: function(model) {
            model.columns = pretty(model.columns, 12, 'JSON', true);
            model.dataSource = pretty(model.dataSource, 12, 'JSON', true);
            model.formFields = pretty(model.fields, 12, 'JSON', true);
        }
    };
})(module);
