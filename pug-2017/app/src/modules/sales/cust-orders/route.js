///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.sales.custOrders', {
            url: '/cust-orders',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'SalesCustOrdersCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["OrderMgtDataService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.sales.cust-orders'
                            });
                        })
                        .then((module) => $injector.get('salesCustOrders')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('salesCustOrders')['onHide'](stateData);
            }]
        });
}

export default routing;