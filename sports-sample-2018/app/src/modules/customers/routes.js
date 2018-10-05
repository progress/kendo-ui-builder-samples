///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import customersGraphicalRoute from './customers-graphical/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customers', {
            abstract: true,
            url: '/customers',
            authorization: {
                allowedRoles: []
            },
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'CustomersCtrl'
                }
            }
        });

    customersGraphicalRoute($stateProvider);
}

export default routing;