(function(angular) {
    'use strict';

    /**
     * @ngdoc overview
     * @name master-detail-grids
     * @description
     * #
     *
     * Main module of the application.
     */
    angular.module('viewFactories', []);
    angular.module('views', []);
    angular.module('components', []);

    angular
        .module('master-detail-grids', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ui.router',
            'ui.bootstrap',
            'ui.bootstrap.tpls',
            'ngSanitize',
            'ngTouch',
            'oc.lazyLoad',
            'kendo.directives',
            'viewFactories',
            'views',
            'components'
        ])
        .run(function($rootScope, $state, $location, $q, jsdoSessions, loginModal) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                var providerNames = toState.data ? toState.data.ensureJsdos : null;

                if (providerNames && providerNames.length) {
                    var authenticationActions = [];
                    var unregisteredProviders = providerNames.filter(function(providerName) {
                        return jsdoSessions.sessions[providerName] === undefined;
                    });

                    if (unregisteredProviders.length) {
                        event.preventDefault();

                        unregisteredProviders.forEach(function(providerName) {
                            var promise = jsdoSessions.getProvider(providerName).then(function(provider) {
                                if (provider.authenticationModel.toLowerCase() === progress.data.Session.AUTH_TYPE_ANON) {
                                    return jsdoSessions.login(provider);
                                } else {
                                    return $q(function(resolve, reject) {
                                        jsdoSessions.login(provider)
                                            .then(function() {
                                                resolve();
                                            })
                                            .catch(function() {
                                                return loginModal.getInstance({ provider: provider })
                                                            .then(function() { resolve(); });
                                            });
                                    });
                                }
                            });

                            authenticationActions.push(promise);
                        });

                        $q.all(authenticationActions).then(function() {
                            $state.go(toState.name, toParams);
                        }).catch(function(err) {
                            $rootScope.$emit('notification', { type: 'error', message: err.message });
                        });
                    }
                }
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
                $rootScope.shouldShowLoginMenu = false;

                var providerNames = toState.data ? toState.data.ensureJsdos : null;

                if (providerNames && providerNames.length) {
                    for (var i = 0; i < providerNames.length; i++) {
                        var providerName = providerNames[i];
                        var jsdoSession = jsdoSessions.sessions[providerName];

                        if (jsdoSession && jsdoSession.authenticationModel !== progress.data.Session.AUTH_TYPE_ANON ) {
                            $rootScope.shouldShowLoginMenu = true;
                            break;
                        }
                    }
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('default', {
                    url: '',
                    abstract: true,
                    templateUrl: 'home-template'
                })
                .state('default.home', {
                    url: '/home',
                    views: {
                        'header': {
                            templateUrl: 'scripts/site-components/header/template.html',
                            controller: 'HeaderCtrl'
                        },
                        'content': {
                            templateUrl: 'modules/system-module/landing-page/index.html',
                            controller: 'LandingPageCtrl'
                        },
                    },
                    resolve: {
                        onInit: ['$injector', '$stateParams', function($injector, $stateParams) {
                            return $injector.get('applicationLandingPage')['onInit']($stateParams);
                        }]
                    },
                    onExit: ['$injector', 'onInit', function($injector, onInit) {
                        $injector.get('applicationLandingPage')['onHide'](onInit);
                    }]
                })
                .state('module', {
                    url: '',
                    abstract: true,
                    templateUrl: 'module-template'
                })
                .state('module.default', {
                    url: '/module',
                    abstract:true,
                    views: {
                        
                        'header': {
                            templateUrl: 'scripts/site-components/header/template.html',
                            controller: 'HeaderCtrl'
                        },
                        
                        'side-navigation': {
                            templateUrl: 'scripts/site-components/side-navigation/template.html',
                            controller: 'SideNavigationCtrl'
                        }
                        
                    }
                })
                .state('module.default.masterDetailGrids', {  
                    abstract:true, 
                    url: '/master-detail-grids',
                    views: {
                        'content@module': {
                            templateUrl: 'modules/master-detail-grids/index.html',
                            controller: 'MasterDetailGridsCtrl'
                        }
                    },
                    resolve: {
                        loadModule: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('modules/master-detail-grids/index.js');
                        }]
                    }
                })
                .state('module.default.masterDetailGrids.master-detail-grids', {
                    url: '/master-detail-grids',
                    templateUrl: 'modules/master-detail-grids/master-detail-grids/index.html',
                    controller: 'MasterDetailGridsMasterDetailGridsCtrl',
                    data: {
                        ensureJsdos: ["CustOrderService"]
                    },
                    resolve: {
                        onInit: ['$injector', '$stateParams', function($injector, $stateParams) {
                            return $injector.get('masterDetailGridsMasterDetailGrids')['onInit']($stateParams);
                        }]
                    },
                    onExit: ['$injector', 'onInit', function($injector, onInit) {
                        $injector.get('masterDetailGridsMasterDetailGrids')['onHide'](onInit);
                    }]
                });

            // Workaround for infinite loop: (https://github.com/angular-ui/ui-router/issues/600)
            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get("$state");

                $state.go('default.home');
            });
        });
})(angular);
