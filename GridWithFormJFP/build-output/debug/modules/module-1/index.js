(function(angular) {
    'use strict';


    var files = [
        'modules/module-1/customer-view/index.js' 
    ];


    angular
        .module('GridWithFormJFP', [{ files: files, cache: true }])
        .controller('Module1Ctrl', function () { });
})(angular);
