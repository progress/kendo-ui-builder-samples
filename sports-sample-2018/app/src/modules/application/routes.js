///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import loginRoute from './login/route.js';
import landingPageRoute from './landing-page/route.js';
import unauthorizedPageRoute from './unauthorized-page/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('default.module.application', {
            abstract: true,
            url: '',
            authorization: {
                allowedRoles: []
            },
            views: {
                'content@default': {
                    template: '<div ui-view></div>',
                    controller: 'ApplicationCtrl'
                }
            }
        });

    loginRoute($stateProvider);
    landingPageRoute($stateProvider);
    unauthorizedPageRoute($stateProvider);
}

export default routing;