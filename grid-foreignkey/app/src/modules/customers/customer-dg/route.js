///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customers.customerDg', {
            url: '/customer-dg',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustomersCustomerDGCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["CustomerService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.customers.customer-dg'
                            });
                        })
                        .then((module) => $injector.get('customersCustomerDG')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('customersCustomerDG')['onHide'](stateData);
            }]
        });
}

export default routing;