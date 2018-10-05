///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.customers.customersGraphical', {
            url: '/customers-graphical',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustomersCustomersGraphicalCtrl',
            controllerAs: 'vm',
            authorization: {
                allowedRoles: []
            },
            data: {
                providers: ["Sports", "Sports"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.customers.customers-graphical'
                            });
                        })
                        .then((module) => $injector.get('customersCustomersGraphical')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('customersCustomersGraphical')['onHide'](stateData);
            }]
        });
}

export default routing;