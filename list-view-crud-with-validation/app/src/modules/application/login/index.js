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

export default angular.module('views.application.login', [])
    .controller('LoginCtrl', Controller)
    .factory('applicationLogin', routerEvents)
    .run(['$templateCache', '$injector', '$stateParams', ($templateCache, $injector, $stateParams) => {
        $templateCache.put('views.application.login.topSection.html', topSection);
        $templateCache.put('views.application.login.middleSection.html', middleSection);
        $templateCache.put('views.application.login.bottomSection.html', bottomSection);
    }])
    .name;