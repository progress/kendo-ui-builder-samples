(function(angular) {
    'use strict';


    var files = [
        'modules/master-detail-grids/master-detail-grids/index.js' 
    ];


    angular
        .module('master-detail-grids', [{ files: files, cache: true }])
        .controller('MasterDetailGridsCtrl', function () { });
})(angular);
