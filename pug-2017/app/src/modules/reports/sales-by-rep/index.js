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

export default angular.module('views.reports.sales-by-rep', [])
    .controller('ReportsSalesByRepCtrl', Controller)
    .factory('reportsSalesByRep', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.reports.sales-by-rep.topSection.html', topSection);
    }])
    .name;