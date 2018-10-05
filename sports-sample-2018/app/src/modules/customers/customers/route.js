///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.customers.customers', {
            url: '/customers',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustomersCustomersCtrl',
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
                                name: 'views.customers.customers'
                            });
                        })
                        .then((module) => $injector.get('customersCustomers')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('customersCustomers')['onHide'](stateData);
            }]
        });
}

export default routing;