///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.reports.customersBalance', {
            url: '/customers-balance',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ReportsCustomersBalanceCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SportsService", "SportsService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.reports.customers-balance'
                            });
                        })
                        .then((module) => $injector.get('reportsCustomersBalance')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('reportsCustomersBalance')['onHide'](stateData);
            }]
        });
}

export default routing;