///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function service($q, providerService, rolesService) {
    function AuthService() {}

    AuthService.prototype = {
        authenticate(unregisteredProviders, onErrorCallback) {
            var deferred = $q.defer();

            if (unregisteredProviders.length) {
                const registerActions = unregisteredProviders.map((providerName) => {
                    if (onErrorCallback) {
                        return providerService.tryRegisterProvider(providerName).catch(onErrorCallback);
                    }

                    return providerService.tryRegisterProvider(providerName);
                });

                $q.all(registerActions)
                    .then(deferred.resolve)
                    .catch(deferred.reject);
            } else {
                deferred.resolve();
            }

            return deferred.promise;
        },

        isAuthorized(authorization) {
            if (authorization && authorization.allowedRoles && authorization.allowedRoles.length) {
                return this.isAuthorizedForRoles(authorization.allowedRoles);
            } else {
                return true;
            }
        },

        isAuthorizedForRoles(roles) {
            const userRoles = rolesService.getRoles();
            if (userRoles && userRoles.length) {
                const foundUserRoles = roles.filter((elem) => {
                    return userRoles.indexOf(elem) > -1;
                });

                return foundUserRoles.length > 0;
            }

            return false;
        }
    };

    return new AuthService();
}

service.$inject = ['$q', 'providerService', 'rolesService'];

export default service;