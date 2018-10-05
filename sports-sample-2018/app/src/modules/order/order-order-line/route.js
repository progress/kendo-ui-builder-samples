///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.order.orderOrderLine', {
            url: '/order-order-line',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'OrderOrderOrderLineCtrl',
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
                                name: 'views.order.order-order-line'
                            });
                        })
                        .then((module) => $injector.get('orderOrderOrderLine')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('orderOrderOrderLine')['onHide'](stateData);
            }]
        });
}

export default routing;