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
import topChildSection from './topChildSection.html';
import topParentSection from './topParentSection.html';

export default angular.module('views.order.order-order-line', [])
    .controller('OrderOrderOrderLineCtrl', Controller)
    .factory('orderOrderOrderLine', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.order.order-order-line.bottomSection.html', bottomSection);
        $templateCache.put('views.order.order-order-line.middleSection.html', middleSection);
        $templateCache.put('views.order.order-order-line.topSection.html', topSection);
        $templateCache.put('views.order.order-order-line.topChildSection.html', topChildSection);
        $templateCache.put('views.order.order-order-line.topParentSection.html', topParentSection);
    }])
    .name;