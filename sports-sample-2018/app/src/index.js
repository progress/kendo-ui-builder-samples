///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
//Vendors
import angular from 'angular';

//App
import services from './scripts/services';
import common from './scripts/common';
import filters from './scripts/filters';
import components from './scripts/components';
import extensions from './scripts/extensions';
import modules from './modules';
import AppLayoutCtrl from './modules/application/app-layout/controller.public.js';
import routerEvents from './modules/application/app-layout/router-events';

//Styles

import './styles/app/app.css';
import './styles/app/kendo.overrides.css';
import './styles/app/app.custom.css';

appRun.$inject = [
    '$rootScope',
    '$state',
    '$window',
    '$ocLazyLoad',
    '$translate',
    'providerService',
    'authService',
    'authenticationService',
    'translationsService'
];

function appRun(
    $rootScope,
    $state,
    $window,
    $ocLazyLoad,
    $translate,
    providerService,
    authService,
    authenticationService,
    translationsService
) {
    $rootScope.hasAuthProviders = false;
    $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
        if (!toState.public) {
            if (authenticationService.isInitialized()) {
                if (!authenticationService.isAuthenticated()) {
                    event.preventDefault();
                    authenticationService.authenticate(toState.name, toParams);
                    return;
                }
            } else {
                event.preventDefault();

                authenticationService.initialize().then(() => {
                    $state.go(toState, toParams);
                });

                return;
            }
        }

        const allStates = $state.get();
        let hasModuleWithProvider = false;

        const appLayoutState = allStates.find(state => {
            if (state.data && state.data.appLayoutProviders) {
                return state.data.appLayoutProviders;
            }
        });

        // When we are on login state we do not need to take app layot providers since they are got before redirecting to login state
        const appLayoutProvidersNames = appLayoutState && toState.name !== 'login' ? appLayoutState.data.appLayoutProviders : [];

        for (let state of allStates) {
            if (state.data && state.data.providers && state.data.providers.length) {
                hasModuleWithProvider = true;
                break;
            }
        }

        if (!hasModuleWithProvider) {
            $rootScope.hasAuthProviders = true;
        }

        if (!$rootScope.hasAuthProviders && toState.name === 'home') {
            event.preventDefault();
            $state.go('login', {
                returnState: toState.name
            });
        }

        const viewsProvidersNames = toState.data && toState.data.providers ? toState.data.providers : [];

        // If the state is home we do not need to get the app layout providers since they will be dublicated
        const providerNames = toState.name !== 'home' ?
            viewsProvidersNames
            .concat(appLayoutProvidersNames)
            .filter((item, i, ar) => {
                return ar.indexOf(item) === i;
            }) :
            [];

        let unregisteredProviders = providerNames.filter((providerName, index, array) => {
            return providerService.registeredProviders.indexOf(providerName) === -1 &&
                array.indexOf(providerName) === index;
        });

        if (unregisteredProviders.length) {
            event.preventDefault();
            authService.authenticate(unregisteredProviders)
                .then(() => {
                    $rootScope.hasAuthProviders = true;
                    $state.go(toState.name, toParams);
                })
                .catch((err) => {
                    $rootScope.$emit('notification', {
                        type: 'error',
                        message: err.message || err
                    });
                });
        }

        if (!authService.isAuthorized(toState.authorization)) {
            event.preventDefault();
            $state.go('unauthorized');
        }
    });

    angular.element($window).on('resize', function() {
        $rootScope.$broadcast('windowResize', $window);
    });

    translationsService.setLanguage('default');
    translationsService.setCulture('en-US');

    let currentCulture = translationsService.getCulture() || 'en-US';
    $ocLazyLoad.load(`http://kendo.cdn.telerik.com/2017.1.118/js/messages/kendo.messages.${currentCulture}.min.js`);
    $ocLazyLoad.load(`http://kendo.cdn.telerik.com/2017.1.118/js/cultures/kendo.culture.${currentCulture}.min.js`)
        .then(function() {
            kendo.culture(currentCulture);
        });

    let currentLanguage = translationsService.getLanguage() || 'default';
    $translate.use(currentLanguage);

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (settings.$authentication && !settings.authenticated) {
                authenticationService.authenticateRequest(settings).then(authSettings => {
                    $.ajax(authSettings);
                });

                return false;
            }
        },
        statusCode: {
            401: function(xhr) {
                if (this.$authentication) {
                    authenticationService.refreshAccessToken(this.$authentication).then(token => {
                        this.headers['Authorization'] = `Bearer ${token}`;
                        $.ajax(this);
                    });
                }
            }
        }
    });
}

export default angular
    .module('app.sports-sample', [
        'ui.router',
        'oc.lazyLoad',
        'ngAnimate',
        'ngSanitize',
        'pascalprecht.translate',
        'kendo.directives',
        services,
        common,
        filters,
        components,
        extensions,
        modules
    ])
    .run(appRun)
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('default', {
                url: '',
                abstract: true,
                template: require('./modules/application/app-layout/template.html'),
                controller: AppLayoutCtrl,
                controllerAs: 'vm',
                data: {
                    appLayoutProviders: []
                },
                resolve: {
                    stateData: ['$injector', '$stateParams', ($injector, $stateParams) => {
                        return Promise.resolve().then((module) => $injector.get('applicationAppLayout')['onInit']($stateParams));
                    }]
                },
                onExit: ['$injector', 'stateData', function($injector, stateData) {
                    $injector.get('applicationAppLayout')['onHide'](stateData);
                }]
            });

        $urlRouterProvider.otherwise(($injector) => {
            const $state = $injector.get("$state");

            $state.go('home');
        });
    }])
    .factory('applicationAppLayout', routerEvents)
    .name;