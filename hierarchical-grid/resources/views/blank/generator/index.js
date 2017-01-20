(function(module) {
    'use strict';

    var pretty = require('js-object-pretty-print').pretty;
    var mb = require('./../../../services/model-builder.js');

    module.exports = {
        prepareRuntimeModel: function(metaModel, metaPath) {
            metaModel.dataSources.forEach((dsMetaDefinition) => {
                var dsMetaModel = mb.getDataSourceMetaModel(dsMetaDefinition.dataProviderName, dsMetaDefinition.dataSourceName, metaPath);
                dsMetaDefinition.viewModelName = dsMetaDefinition.name + 'Model';
                mb.buildRuntimeDataSource(dsMetaDefinition, dsMetaModel);
                dsMetaDefinition.dataSource = pretty(dsMetaDefinition.dataSource, 12, 'JSON', true);                
            });
        }
    };
})(module);
