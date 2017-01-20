(function(angular) {
    'use strict';


    var files = [
        'modules/hierarchical-grid/hierarchical-grid/index.js' 
    ];


    angular
        .module('hierarchical-grid', [{ files: files, cache: true }])
        .controller('HierarchicalGridCtrl', function () { });
})(angular);
