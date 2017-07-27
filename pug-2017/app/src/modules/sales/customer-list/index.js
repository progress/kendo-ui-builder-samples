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

export default angular.module('views.sales.customer-list', [])
    .controller('SalesCustomerListCtrl', Controller)
    .factory('salesCustomerList', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.sales.customer-list.bottomSection.html', bottomSection);
        $templateCache.put('views.sales.customer-list.middleSection.html', middleSection);
        $templateCache.put('views.sales.customer-list.topSection.html', topSection);
    }])
    .name;