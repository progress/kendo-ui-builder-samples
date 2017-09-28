///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.management.locations', {
            url: '/locations',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ManagementLocationsCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SportsService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.management.locations'
                            });
                        })
                        .then((module) => $injector.get('managementLocations')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('managementLocations')['onHide'](stateData);
            }]
        });
}

export default routing;