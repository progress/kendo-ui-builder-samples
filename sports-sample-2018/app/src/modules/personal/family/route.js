///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.personal.family', {
            url: '/family',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'PersonalFamilyCtrl',
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
                                name: 'views.personal.family'
                            });
                        })
                        .then((module) => $injector.get('personalFamily')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('personalFamily')['onHide'](stateData);
            }]
        });
}

export default routing;