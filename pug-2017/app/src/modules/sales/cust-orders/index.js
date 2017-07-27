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

export default angular.module('views.sales.cust-orders', [])
    .controller('SalesCustOrdersCtrl', Controller)
    .factory('salesCustOrders', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.sales.cust-orders.bottomSection.html', bottomSection);
        $templateCache.put('views.sales.cust-orders.middleSection.html', middleSection);
        $templateCache.put('views.sales.cust-orders.topSection.html', topSection);
        $templateCache.put('views.sales.cust-orders.topChildSection.html', topChildSection);
        $templateCache.put('views.sales.cust-orders.topParentSection.html', topParentSection);
    }])
    .name;