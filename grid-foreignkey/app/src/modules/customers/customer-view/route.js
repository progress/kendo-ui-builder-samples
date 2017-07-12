///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customers.customerView', {
            url: '/customer-view',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustomersCustomerViewCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["CustomerService", "SalesrepService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.customers.customer-view'
                            });
                        })
                        .then((module) => $injector.get('customersCustomerView')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('customersCustomerView')['onHide'](stateData);
            }]
        });
}

export default routing;