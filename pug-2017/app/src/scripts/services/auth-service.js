///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function authService($q, providerService) {
    return {
        authenticate: function(unregisteredProviders, onErrorCallback) {
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
        }
    };
}

authService.$inject = ['$q', 'providerService'];

export default authService;