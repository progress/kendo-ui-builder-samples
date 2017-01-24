(function(module) {
    'use strict';

    var pretty = require('js-object-pretty-print').pretty;
    
    module.exports = {
        prepareRuntimeModel: function(metaModel, metaPath) {
            this._prepareModel(metaModel);
        },

        prepareDesigntimeModel: function(metaModel, metaPath) {
            this._prepareModel(metaModel);
        },

        _prepareModel: function(model) {
            if (model.resizable !== undefined) {
                var resizable = model.resizable;
                if (resizable.content !== undefined ||
                    resizable.min !== undefined ||
                    resizable.max !== undefined ||
                    resizable.toolbar !== undefined) {
                    model.resizable = pretty(resizable, 4, 'JSON', true);
                } else {
                    delete model.resizable;
                }
            }

            if (!model.tools.length) {
                delete model.tools;
            }
        }
    };
})(module);
