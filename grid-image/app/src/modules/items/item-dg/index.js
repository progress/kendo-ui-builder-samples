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
import middleSection from './middleSection.html';
import bottomSection from './bottomSection.html';

export default angular.module('views.items.item-dg', [])
    .controller('ItemsItemDGCtrl', Controller)
    .factory('itemsItemDG', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.items.item-dg.topSection.html', topSection);
        $templateCache.put('views.items.item-dg.middleSection.html', middleSection);
        $templateCache.put('views.items.item-dg.bottomSection.html', bottomSection);
    }])
    .name;