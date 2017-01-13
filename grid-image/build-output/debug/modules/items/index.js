(function(angular) {
    'use strict';


    var files = [
        'modules/items/item-dg/index.js' 
    ];


    angular
        .module('grid-image', [{ files: files, cache: true }])
        .controller('ItemsCtrl', function () { });
})(angular);
