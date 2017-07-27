///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import dashboardRoute from './dashboard/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.main', {
            abstract: true,
            url: '/main',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'MainCtrl'
                }
            }
        });

    dashboardRoute($stateProvider);
}

export default routing;