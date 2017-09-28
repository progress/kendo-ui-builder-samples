///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.management.reps', {
            url: '/reps',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ManagementRepsCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SportsService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.management.reps'
                            });
                        })
                        .then((module) => $injector.get('managementReps')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('managementReps')['onHide'](stateData);
            }]
        });
}

export default routing;