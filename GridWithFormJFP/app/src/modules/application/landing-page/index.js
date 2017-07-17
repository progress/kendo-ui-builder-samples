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
import bottomSection from './bottomSection.html';

export default angular.module('views.application.landing-page', [])
    .controller('LandingPageCtrl', Controller)
    .factory('applicationLanding-page', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.application.landing-page.topSection.html', topSection);
        $templateCache.put('views.application.landing-page.bottomSection.html', bottomSection);
    }])
    .name;