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

export default angular.module('views.customer-crud.list-view-external-form', [])
    .controller('CustomerCRUDListViewExternalFormCtrl', Controller)
    .factory('customerCrudList-view-external-form', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.customer-crud.list-view-external-form.topSection.html', topSection);
    }])
    .name;