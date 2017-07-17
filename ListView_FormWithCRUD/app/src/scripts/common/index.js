///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import angular from 'angular';

import HeaderCtrl from './header';
import SideNavigationCtrl from './side-navigation';

/* Partial Views */
import headerTemplate from './header/index.html';
import sideNavigationTemplate from './side-navigation/index.html';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('default.module', {
            url: '',
            abstract: true
        })
        .state('module', {
            url: '',
            abstract: true,
            templateUrl: 'module-template'
        })
        .state('module.default', {
            url: '/module',
            abstract: true,
            views: {
                'header': {
                    templateUrl: headerTemplate,
                    controller: 'HeaderCtrl'
                },
                'side-navigation': {
                    templateUrl: sideNavigationTemplate,
                    controller: 'SideNavigationCtrl'
                }
            }
        })
}

export default angular.module('app.common', [])
    .controller('SideNavigationCtrl', SideNavigationCtrl)
    .controller('HeaderCtrl', HeaderCtrl)
    .config(routing)
    .name;