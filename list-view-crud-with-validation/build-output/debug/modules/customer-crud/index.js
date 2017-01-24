(function(angular) {
    'use strict';


    var files = [
        'modules/customer-crud/list-view-external-form/index.js' 
    ];


    angular
        .module('list-view-crud-with-validation', [{ files: files, cache: true }])
        .controller('CustomerCRUDCtrl', function () { });
})(angular);
