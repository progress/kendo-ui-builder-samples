///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.reports.salesByRep', {
            url: '/sales-by-rep',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ReportsSalesByRepCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["OrderMgtDataService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.reports.sales-by-rep'
                            });
                        })
                        .then((module) => $injector.get('reportsSalesByRep')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('reportsSalesByRep')['onHide'](stateData);
            }]
        });
}

export default routing;