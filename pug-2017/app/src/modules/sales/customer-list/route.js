///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.sales.customerList', {
            url: '/customer-list',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'SalesCustomerListCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["OrderMgtDataService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.sales.customer-list'
                            });
                        })
                        .then((module) => $injector.get('salesCustomerList')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('salesCustomerList')['onHide'](stateData);
            }]
        });
}

export default routing;