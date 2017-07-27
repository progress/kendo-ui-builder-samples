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

export default angular.module('views.management.locations', [])
    .controller('ManagementLocationsCtrl', Controller)
    .factory('managementLocations', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.management.locations.bottomSection.html', bottomSection);
        $templateCache.put('views.management.locations.middleSection.html', middleSection);
        $templateCache.put('views.management.locations.topSection.html', topSection);
    }])
    .name;