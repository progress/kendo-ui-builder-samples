///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login/:returnState',
            controller: LoginStateCtrl,
            controllerAs: 'vm',
        });
}

class LoginStateCtrl {
    constructor($state, $rootScope, $stateParams, providerService, authService) {
        this.$rootScope = $rootScope;
        let unregisteredProviders = [];
        const allStates = $state.get();
        for (let state of allStates) {
            if (state.data && state.data.providers && state.data.providers.length) {
                let uniqueProviders = state.data.providers.filter((providerName, index, array) => {
                    return unregisteredProviders.indexOf(providerName) === -1 && array.indexOf(providerName) === index;
                });
                unregisteredProviders = unregisteredProviders.concat(uniqueProviders);
            }
        }

        if (!unregisteredProviders.length) {
            $state.go('default.module.application.home');
        }

        authService.authenticate(unregisteredProviders, (err) => this._$errorHandler(err))
            .then(() => {
                if (providerService.registeredProviders.length) {
                    $rootScope.hasAuthProviders = true;
                    $state.go($stateParams.returnState || 'default.module.application.home');
                } else if (!$rootScope.hasAuthProviders) {
                    $state.reload();
                }
            })
            .catch((err) => this._$errorHandler(err));
    }

    _$errorHandler(err) {
        this.$rootScope.$emit('notification', {
            type: 'error',
            message: err.message || err
        });
    }
}

LoginStateCtrl.$inject = ['$state', '$rootScope', '$stateParams', 'providerService', 'authService'];

export default routing;