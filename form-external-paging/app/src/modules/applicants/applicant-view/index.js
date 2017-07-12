///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import angular from 'angular';

import BaseController from './controller';
import Controller from './controller.public';
import routerEvents from './router-events';

import topSection from './topSection.html';

export default angular.module('views.applicants.applicant-view', [])
    .controller('ApplicantsApplicantViewCtrl', Controller)
    .factory('applicantsApplicantView', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.applicants.applicant-view.topSection.html', topSection);
    }])
    .name;