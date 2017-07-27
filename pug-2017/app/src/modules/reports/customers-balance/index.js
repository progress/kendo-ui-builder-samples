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

export default angular.module('views.reports.customers-balance', [])
    .controller('ReportsCustomersBalanceCtrl', Controller)
    .factory('reportsCustomersBalance', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.reports.customers-balance.topSection.html', topSection);
    }])
    .name;