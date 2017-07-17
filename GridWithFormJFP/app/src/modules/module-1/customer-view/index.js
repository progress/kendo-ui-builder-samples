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

export default angular.module('views.module-1.customer-view', [])
    .controller('Module1CustomerViewCtrl', Controller)
    .factory('module1CustomerView', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.module-1.customer-view.topSection.html', topSection);
    }])
    .name;