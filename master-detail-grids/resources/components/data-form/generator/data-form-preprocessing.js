(function(module) {
    'use strict';

    var path = require('path');
    var DATA_PRODIVERS_DIR = 'dataProviders/';
    var JSON_TEXT = '.json';
    var pretty = require('js-object-pretty-print').pretty;
    var componentPreprocessing = require('./../../../services/component-preprocessing.js');

    module.exports = {};

    var DataFormPreprocessing = function() { };

    DataFormPreprocessing.prototype = {
        generateOptions: function(model, metaPath, isBuildApp) {
            var options = {};
            var dataSource;

            if (model.dataProvider && model.dataSource) {
                var dataProvider = require(path.join(metaPath, DATA_PRODIVERS_DIR + model.dataProvider + JSON_TEXT));
                dataSource = dataProvider.children.find(function(o) { return o.name === model.dataSource; });
            }

            componentPreprocessing.populateDataSource(model, 1, dataSource, true);
            model.dataSource = pretty(model.dataSource, 12, 'JSON', true);
            model.formFields = pretty(model.fields, 12, 'JSON', true);
        }
    };

    module.exports = new DataFormPreprocessing();

})(module);
