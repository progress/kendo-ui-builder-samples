(function (module) {
    'use strict';

    var path = require('path');
    var fs = require('fs');

    module.exports = {
        prepareDesigntimeModel: function (metaModel, metaPath) {
            this._prepareModel(metaModel, metaPath);
        },

        _prepareModel: function (metaModel, metaPath) {
            var modules = fs.readdirSync(path.join(metaPath, 'modules'));

            metaModel._modules = [];

            modules.forEach((moduleFile) => {
                var modulePath = path.join(metaPath, 'modules', moduleFile);
                var json = fs.readFileSync(modulePath);
                var module = JSON.parse(json);

                if (module.moduleType === 'default') {
                    metaModel._modules.push({
                        name: module.name,
                        thumbnail: module.thumbnail
                    });
                }
            });
        }
    };

})(module);
