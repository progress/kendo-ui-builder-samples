(function(angular) {

    angular
        .module('grid-external-filtering')
        .service('dsService', [function() {

            function DataSourceService() {
            }

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

                cancel: function (dataSource, model) {
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
                }
            };

            return new DataSourceService();
        }]);

})(angular);
