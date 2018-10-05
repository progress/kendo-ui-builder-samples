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
import middleSection from './middleSection.html';
import topSection from './topSection.html';

export default angular.module('views.personal.family', [])
    .controller('PersonalFamilyCtrl', Controller)
    .factory('personalFamily', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.personal.family.bottomSection.html', bottomSection);
        $templateCache.put('views.personal.family.middleSection.html', middleSection);
        $templateCache.put('views.personal.family.topSection.html', topSection);
    }])
    .name;