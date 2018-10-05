///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.personal.familyGraphical', {
            url: '/family-graphical',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'PersonalFamilyGraphicalCtrl',
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
                                name: 'views.personal.family-graphical'
                            });
                        })
                        .then((module) => $injector.get('personalFamilyGraphical')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('personalFamilyGraphical')['onHide'](stateData);
            }]
        });
}

export default routing;