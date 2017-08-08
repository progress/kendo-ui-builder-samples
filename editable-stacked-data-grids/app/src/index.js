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

//Styles

import './styles/app/app.css';
import './styles/app/kendo.overrides.css';
import './styles/app/app.custom.css';

export default angular
    .module('app.editable-stacked-data-grids', [
        'ui.router',
        'oc.lazyLoad',
        'ngAnimate',
        'ngSanitize',
        'kendo.directives',
        services,
        common,
        filters,
        components,
        extensions,
        modules
    ])
    .run(['$rootScope', '$state', '$window', 'providerService', 'authService', ($rootScope, $state, $window, providerService, authService) => {
        $rootScope.hasAuthProviders = false;
        $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
            const allStates = $state.get();
            let hasModuleWithProvider = false;
            for (let state of allStates) {
                if (state.data && state.data.providers && state.data.providers.length) {
                    hasModuleWithProvider = true;
                    break;
                }
            }

            if (!hasModuleWithProvider) {
                $rootScope.hasAuthProviders = true;
            }

            if (!$rootScope.hasAuthProviders && toState.name === 'default.module.application.home') {
                event.preventDefault();
                $state.go('login', {
                    returnState: toState.name
                });
            }

            let providerNames = toState.data ? toState.data.providers : [];
            let unregisteredProviders = providerNames.filter((providerName, index, array) => {
                return providerService.registeredProviders.indexOf(providerName) === -1 && array.indexOf(providerName) === index;
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
        });

        angular.element($window).on('resize', function() {
            $rootScope.$broadcast('windowResize', $window);
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('default', {
                url: '',
                abstract: true,
                templateUrl: 'home-template'
            });

        $urlRouterProvider.otherwise(($injector) => {
            const $state = $injector.get("$state");

            $state.go('default.module.application.home');
        });
    }]).name;