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

export default angular.module('views.customers.customer-view', [])
    .controller('CustomersCustomerViewCtrl', Controller)
    .factory('customersCustomerView', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.customers.customer-view.topSection.html', topSection);
    }])
    .name;