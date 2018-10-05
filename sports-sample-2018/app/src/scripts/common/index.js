///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import angular from 'angular';
import translation from './translation';
import authorizationDirective from './authorization';

import AppLayoutCtrl from '../../modules/application/app-layout/controller.public.js';

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
            template: require('../../modules/application/app-layout/template.html'),
            controller: AppLayoutCtrl,
            controllerAs: 'vm',
            data: {
                appLayoutProviders: []
            },
            resolve: {
                stateData: ['$injector', '$stateParams', ($injector, $stateParams) => {
                    return Promise.resolve().then((module) => $injector.get('applicationAppLayout')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('applicationAppLayout')['onHide'](stateData);
            }]
        })
        .state('module.default', {
            url: '/module',
            abstract: true
        });
}

authenticationConfig.$inject = ['authenticationServiceProvider'];

function authenticationConfig(authenticationServiceProvider) {
    const authConfig = {
        authProviders: {

        }
    };

    authenticationServiceProvider.init(authConfig);
}
export default angular.module('app.common', [translation])
    .controller('AppLayoutCtrl')
    .config(authenticationConfig)
    .config(routing)
    .directive('showForRoles', authorizationDirective)
    .name;