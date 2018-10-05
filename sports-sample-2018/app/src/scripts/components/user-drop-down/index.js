///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        bindToController: {
            id: '@'
        },
        controller: [
            '$rootScope',
            '$scope',
            '$state',
            '$window',
            '$document',
            '$timeout',
            '$injector',
            '$q',
            'authenticationService',
            'providerService',
            'translationsService',
            'rolesService',
            'emitService',
            function($rootScope, $scope, $state, $window, $document, $timeout, $injector, $q, authenticationService, providerService, translationsService, rolesService, emitService) {
                const vm = this;
                vm.hasAuthProviders = false;
                vm.showLogout = false;

                vm.logoutAction = function() {
                    $q.all([
                            authenticationService.signOut(),
                            providerService.unRegisterProviders()
                        ])
                        .then(() => {
                            activate();
                            rolesService.clearRoles();
                            $rootScope.hasAuthProviders = false;
                            $state.go('login');
                        })
                        .catch(function() {
                            //Error handling
                            $state.go('home');
                        });
                };

                vm.logout = function() {
                    var triggerLogout = emitService.emit('logout');

                    if (!triggerLogout.defaultPrevented) {
                        vm.logoutAction();
                    }
                };

                vm.toggleLogout = function() {
                    vm.showLogout = !vm.showLogout;
                };

                angular.element($window).resize(hideLogout);
                angular.element($document).click(hideLogout);

                function hideLogout(e) {
                    if (angular.element(e.target).closest('.user-drop-down').length > 0) {
                        return;
                    }
                    vm.showLogout = false;
                    $scope.$apply();
                }

                function activate() {
                    const watchHandler = $scope.$watch(() => {
                        var registratedProviders = providerService.registeredProviders
                            .map((providerName) => providerService.dataProviders[providerName]);
                        return registratedProviders;
                    }, (registeredProviders) => {
                        const authProviders = registeredProviders.filter(provider => provider.authenticationModel !== 'Anonymous')
                        if (authProviders.length > 0 || authenticationService.requireSignIn()) {
                            vm.hasAuthProviders = true;
                            watchHandler();
                        }
                    }, true);
                }

                activate();
            }
        ],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;