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

import bottomSection from './bottomSection.html';
import middleSection from './middleSection.html';
import topSection from './topSection.html';

export default angular.module('views.inventory.items-grid', [])
    .controller('InventoryItemsGridCtrl', Controller)
    .factory('inventoryItemsGrid', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.inventory.items-grid.bottomSection.html', bottomSection);
        $templateCache.put('views.inventory.items-grid.middleSection.html', middleSection);
        $templateCache.put('views.inventory.items-grid.topSection.html', topSection);
    }])
    .name;