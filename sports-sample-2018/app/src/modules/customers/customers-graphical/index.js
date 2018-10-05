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

export default angular.module('views.customers.customers-graphical', [])
    .controller('CustomersCustomersGraphicalCtrl', Controller)
    .factory('customersCustomersGraphical', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.customers.customers-graphical.topSection.html', topSection);
    }])
    .name;