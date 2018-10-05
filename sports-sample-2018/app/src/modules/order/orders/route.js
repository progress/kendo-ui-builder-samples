///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.order.orders', {
            url: '/orders',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'OrderOrdersCtrl',
            controllerAs: 'vm',
            authorization: {
                allowedRoles: []
            },
            data: {
                providers: ["Sports"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.order.orders'
                            });
                        })
                        .then((module) => $injector.get('orderOrders')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('orderOrders')['onHide'](stateData);
            }]
        });
}

export default routing;