///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import angular from 'angular';

import BaseController from './controller';
import Controller from './controller.public';
import routerEvents from './router-events';

import bottomSection from './bottomSection.html';
import middleSection from './middleSection.html';
import topSection from './topSection.html';
import topChildSection from './topChildSection.html';
import topParentSection from './topParentSection.html';

export default angular.module('views.cust-order.cust-order-sdg', [])
    .controller('CustOrderCustOrderSDGCtrl', Controller)
    .factory('custOrderCustOrderSDG', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.cust-order.cust-order-sdg.bottomSection.html', bottomSection);
        $templateCache.put('views.cust-order.cust-order-sdg.middleSection.html', middleSection);
        $templateCache.put('views.cust-order.cust-order-sdg.topSection.html', topSection);
        $templateCache.put('views.cust-order.cust-order-sdg.topChildSection.html', topChildSection);
        $templateCache.put('views.cust-order.cust-order-sdg.topParentSection.html', topParentSection);
    }])
    .name;