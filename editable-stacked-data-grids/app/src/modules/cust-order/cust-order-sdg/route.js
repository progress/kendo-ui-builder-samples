///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.custOrder.custOrderSdg', {
            url: '/cust-order-sdg',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustOrderCustOrderSDGCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["DemoService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.cust-order.cust-order-sdg'
                            });
                        })
                        .then((module) => $injector.get('custOrderCustOrderSDG')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('custOrderCustOrderSDG')['onHide'](stateData);
            }]
        });
}

export default routing;