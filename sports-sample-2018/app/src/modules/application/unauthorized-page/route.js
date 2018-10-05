///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('unauthorized', {
            url: '/unauthorized',
            templateProvider: [() => require.ensure([], (require) => require('./index.html'))],
            controller: 'UnauthorizedPageCtrl',
            controllerAs: 'vm',
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.application.unauthorized-page'
                            });
                        })
                        .then((module) => $injector.get('applicationUnauthorized-page')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('applicationUnauthorized-page')['onHide'](stateData);
            }]
        });
}

export default routing;