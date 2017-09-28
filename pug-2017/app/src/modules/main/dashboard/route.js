///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.main.dashboard', {
            url: '/dashboard',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'MainDashboardCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SportsService", "SportsService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.main.dashboard'
                            });
                        })
                        .then((module) => $injector.get('mainDashboard')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('mainDashboard')['onHide'](stateData);
            }]
        });
}

export default routing;