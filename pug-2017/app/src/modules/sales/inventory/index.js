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

export default angular.module('views.sales.inventory', [])
    .controller('SalesInventoryCtrl', Controller)
    .factory('salesInventory', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.sales.inventory.topSection.html', topSection);
    }])
    .name;