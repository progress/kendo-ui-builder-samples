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

export default angular.module('views.customers.customer-dg', [])
    .controller('CustomersCustomerDGCtrl', Controller)
    .factory('customersCustomerDG', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.customers.customer-dg.topSection.html', topSection);
        $templateCache.put('views.customers.customer-dg.middleSection.html', middleSection);
        $templateCache.put('views.customers.customer-dg.bottomSection.html', bottomSection);
    }])
    .name;