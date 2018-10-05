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

export default angular.module('views.inventory.item-graphics', [])
    .controller('InventoryItemGraphicsCtrl', Controller)
    .factory('inventoryItemGraphics', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.inventory.item-graphics.topSection.html', topSection);
    }])
    .name;