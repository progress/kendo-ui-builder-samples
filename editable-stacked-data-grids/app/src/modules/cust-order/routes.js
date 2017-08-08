///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import custOrderSdgRoute from './cust-order-sdg/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.custOrder', {
            abstract: true,
            url: '/cust-order',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'CustOrderCtrl'
                }
            }
        });

    custOrderSdgRoute($stateProvider);
}

export default routing;