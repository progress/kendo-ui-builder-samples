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

export default angular.module('views.charts.charts-demo', [])
    .controller('ChartsChartsDemoCtrl', Controller)
    .factory('chartsChartsDemo', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.charts.charts-demo.topSection.html', topSection);
    }])
    .name;