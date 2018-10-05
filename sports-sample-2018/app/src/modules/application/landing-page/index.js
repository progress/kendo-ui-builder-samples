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

import bottomSection from './bottomSection.html';
import topSection from './topSection.html';

export default angular.module('views.application.landing-page', [])
    .controller('LandingPageCtrl', Controller)
    .factory('applicationLanding-page', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.application.landing-page.bottomSection.html', bottomSection);
        $templateCache.put('views.application.landing-page.topSection.html', topSection);
    }])
    .name;