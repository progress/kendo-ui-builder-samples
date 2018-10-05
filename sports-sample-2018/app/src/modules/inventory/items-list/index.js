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

export default angular.module('views.inventory.items-list', [])
    .controller('InventoryItemsListCtrl', Controller)
    .factory('inventoryItemsList', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.inventory.items-list.topSection.html', topSection);
    }])
    .name;