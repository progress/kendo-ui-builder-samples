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

export default angular.module('views.grid-external-filtering.grid-external-filtering', [])
    .controller('GridExternalFilteringGridExternalFilteringCtrl', Controller)
    .factory('gridExternalFilteringGrid-external-filtering', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.grid-external-filtering.grid-external-filtering.topSection.html', topSection);
    }])
    .name;