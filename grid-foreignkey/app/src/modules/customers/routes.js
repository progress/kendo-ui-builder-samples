///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import customerDgRoute from './customer-dg/route.js';
import customerViewRoute from './customer-view/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customers', {
            abstract: true,
            url: '/customers',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'CustomersCtrl'
                }
            }
        });

    customerDgRoute($stateProvider);
    customerViewRoute($stateProvider);
}

export default routing;