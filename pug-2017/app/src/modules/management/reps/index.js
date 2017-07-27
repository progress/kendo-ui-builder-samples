///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import angular from 'angular';

import BaseController from './controller';
import Controller from './controller.public';
import routerEvents from './router-events';

import bottomSection from './bottomSection.html';
import middleSection from './middleSection.html';
import topSection from './topSection.html';

export default angular.module('views.management.reps', [])
    .controller('ManagementRepsCtrl', Controller)
    .factory('managementReps', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.management.reps.bottomSection.html', bottomSection);
        $templateCache.put('views.management.reps.middleSection.html', middleSection);
        $templateCache.put('views.management.reps.topSection.html', topSection);
    }])
    .name;