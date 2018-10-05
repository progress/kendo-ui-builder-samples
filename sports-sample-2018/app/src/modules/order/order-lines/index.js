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

export default angular.module('views.order.order-lines', [])
    .controller('OrderOrderLinesCtrl', Controller)
    .factory('orderOrderLines', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.order.order-lines.bottomSection.html', bottomSection);
        $templateCache.put('views.order.order-lines.middleSection.html', middleSection);
        $templateCache.put('views.order.order-lines.topSection.html', topSection);
    }])
    .name;