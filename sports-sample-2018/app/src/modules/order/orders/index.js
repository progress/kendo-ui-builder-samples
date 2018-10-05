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

export default angular.module('views.order.orders', [])
    .controller('OrderOrdersCtrl', Controller)
    .factory('orderOrders', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.order.orders.bottomSection.html', bottomSection);
        $templateCache.put('views.order.orders.middleSection.html', middleSection);
        $templateCache.put('views.order.orders.topSection.html', topSection);
    }])
    .name;