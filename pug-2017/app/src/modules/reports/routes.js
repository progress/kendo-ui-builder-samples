///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import salesByRepRoute from './sales-by-rep/route.js';
import customersBalanceRoute from './customers-balance/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.reports', {
            abstract: true,
            url: '/reports',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'ReportsCtrl'
                }
            }
        });

    salesByRepRoute($stateProvider);
    customersBalanceRoute($stateProvider);
}

export default routing;