///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import angular from 'angular';

import BaseController from './controller';
import Controller from './controller.public';
import routerEvents from './router-events';
import './style.css';

import topSection from './topSection.html';

export default angular.module('views.inventory.inventory-graphical', [])
    .controller('InventoryInventoryGraphicalCtrl', Controller)
    .factory('inventoryInventory_graphical', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.inventory.inventory-graphical.topSection.html', topSection);
    }])
    .name;