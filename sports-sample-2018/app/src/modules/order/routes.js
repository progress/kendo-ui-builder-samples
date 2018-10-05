///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import ordersRoute from './orders/route.js';
import orderOrderLineRoute from './order-order-line/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.order', {
            abstract: true,
            url: '/order',
            authorization: {
                allowedRoles: []
            },
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'OrderCtrl'
                }
            }
        });

    ordersRoute($stateProvider);
    orderOrderLineRoute($stateProvider);
}

export default routing;