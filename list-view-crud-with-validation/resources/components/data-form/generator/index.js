(function(module) {
    'use strict';

    var path = require('path');
    var preprocessingService = require('./data-form-preprocessing.js');
    var META = 'meta';

    module.exports = {
        generate: function (gen, moduleRoot, model) {
            preprocessingService.generateOptions(model, path.join(gen._metaPath, META), true);
        }
    };
})(module);
