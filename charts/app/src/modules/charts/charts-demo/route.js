///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.charts.chartsDemo', {
            url: '/charts-demo',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ChartsChartsDemoCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SalesrepService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.charts.charts-demo'
                            });
                        })
                        .then((module) => $injector.get('chartsChartsDemo')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('chartsChartsDemo')['onHide'](stateData);
            }]
        });
}

export default routing;