///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import custOrdersRoute from './cust-orders/route.js';
import inventoryRoute from './inventory/route.js';
import customerListRoute from './customer-list/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.sales', {
            abstract: true,
            url: '/sales',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'SalesCtrl'
                }
            }
        });

    custOrdersRoute($stateProvider);
    inventoryRoute($stateProvider);
    customerListRoute($stateProvider);
}

export default routing;