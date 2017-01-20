(function(angular) {
    'use strict';


    var files = [
        'modules/grid-external-filtering/grid-external-filtering/index.js' 
    ];


    angular
        .module('grid-external-filtering', [{ files: files, cache: true }])
        .controller('GridExternalFilteringCtrl', function () { });
})(angular);
