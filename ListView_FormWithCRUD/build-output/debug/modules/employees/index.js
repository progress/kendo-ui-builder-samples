(function(angular) {
    'use strict';


    var files = [
        'modules/employees/employee-view/index.js' 
    ];


    angular
        .module('ListView_FormWithCRUD', [{ files: files, cache: true }])
        .controller('EmployeesCtrl', function () { });
})(angular);
