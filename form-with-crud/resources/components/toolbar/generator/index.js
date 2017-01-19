(function(module) {
    'use strict';

    var pretty = require('js-object-pretty-print').pretty;

    module.exports = {
        prepareDesigntimeModel: function(metaModel, metaPath) {
            metaModel.items.forEach(function(i) {
                if (i.itemType === 'Template') {
                    i.template = '&nbsp;&nbsp;Custom Template&nbsp;&nbsp;';
                }

                i.type = i.itemType ? i.itemType.toLowerCase() : 'button';
            });
            metaModel.items = pretty(metaModel.items, 4, 'JSON', true);
        }
    };
})(module);
