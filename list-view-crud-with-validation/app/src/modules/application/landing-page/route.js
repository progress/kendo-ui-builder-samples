///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import headerTemplate from './../../../scripts/common/header/index.html';

function routing($stateProvider) {
    $stateProvider
        .state('default.module.application.home', {
            url: '/home',
            views: {
                'header@default': {
                    templateUrl: headerTemplate,
                    controller: 'HeaderCtrl'
                },
                'content@default': {
                    templateProvider: [() => require.ensure([], (require) => require('./index.html'))],
                    controller: 'LandingPageCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.application.landing-page'
                            });
                        })
                        .then((module) => $injector.get('applicationLanding-page')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('applicationLanding-page')['onHide'](stateData);
            }]
        });
}

export default routing;