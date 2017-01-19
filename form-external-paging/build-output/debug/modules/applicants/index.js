(function(angular) {
    'use strict';


    var files = [
        'modules/applicants/applicant-view/index.js' 
    ];


    angular
        .module('form-external-paging', [{ files: files, cache: true }])
        .controller('ApplicantsCtrl', function () { });
})(angular);
