(function(angular) {
    'use strict';


    var files = [
        'modules/customers/customer-dg/index.js' 
    ];


    angular
        .module('grid-foreignkey', [{ files: files, cache: true }])
        .controller('CustomersCtrl', function () { });
})(angular);
