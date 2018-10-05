///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

const SIGNIN_STATE_KEY = 'kuib.oidc.state';

function AuthenticationServiceProvider() {
    this.init = function(config) {
        this.config = config;
    }

    this.$get = ['$q', '$location', function($q, $location) {
        return new AuthenticationService($q, $location, this.config);
    }];
}

class AuthenticationService {
    constructor($q, $location, options) {
        this.$q = $q;
        this.$location = $location;
        this._initialized = false;
        this._requireSignIn = !!options.appSignIn;
        this.authProviders = [];
        this.authMap = {};

        const port = $location.port() === 80 ? '' : ':' + $location.port()
        const rootUrl = $location.protocol() + '://' + $location.host() + port;

        Object.keys(options.authProviders).forEach(authType => {
            options.authProviders[authType].items.forEach(item => {
                const authProvider = this._createAuthProvider(authType, rootUrl, item.settings);
                this.authProviders.push(authProvider);

                item.dataProviders.forEach(dataProvider => {
                    this.authMap[dataProvider] = authProvider;
                });
            });
        });
    }

    initialize() {
        const initializers = this.authProviders
            .map(provider => provider.initialize());

        return this.$q.all(initializers).then(() => {
            this._initialized = true;
        });
    }

    isInitialized() {
        return this._initialized;
    }

    requireSignIn() {
        return this._requireSignIn;
    }

    isAuthenticated() {
        for (let provider of this.authProviders) {
            if (!provider.isAuthenticated()) {
                return false;
            }
        }

        return true;
    }

    authenticate(returnUrlState, returnUrlParams) {
        const index = this._findUnauthenticatedProviderIndex();

        if (index > -1) {
            const signInState = {
                providerIndex: index,
                returnUrlState: returnUrlState,
                returnUrlParams: returnUrlParams,
                returnUrl: this.$location.absUrl()
            };

            sessionStorage.setItem(SIGNIN_STATE_KEY, JSON.stringify(signInState));
            this.authProviders[index].authenticate();
        }
    }

    authenticateRequest(requestSettings) {
        if (this.authMap[requestSettings.$authentication]) {
            return this.authMap[requestSettings.$authentication].authenticateRequest(requestSettings);
        }

        return this.$q.resolve(requestSettings);
    }

    completeAuthentication() {
        const signInState = JSON.parse(sessionStorage.getItem(SIGNIN_STATE_KEY)) || {
            providerIndex: this._findUnauthenticatedProviderIndex(),
            returnUrlState: 'home',
            returnUrlParams: {}
        };

        if (signInState.providerIndex === -1) {
            this.$q.resolve(signInState);
        }

        return this.authProviders[signInState.providerIndex].completeAuthentication().then(user => {
            sessionStorage.removeItem(SIGNIN_STATE_KEY);
            return signInState;
        });
    }

    refreshAccessToken(provider) {
        if (this.authMap[provider]) {
            return this.authMap[provider].refreshAccessToken();
        }

        return this.$q.resolve('');
    }

    signOut() {
        const signOutUsers = this.authProviders
            .map(provider => provider.signOut());

        return this.$q.all(signOutUsers);
    }

    _createAuthProvider(type, rootUrl, settings) {
        switch (type) {
            case 'oidc':
                return new oidcProvider({
                    rootUrl: rootUrl,
                    settings: settings
                });

            default:
                break;
        }

        return null;
    }

    _findUnauthenticatedProviderIndex() {
        return this.authProviders.findIndex(provider => !provider.isAuthenticated());
    }
}

export default AuthenticationServiceProvider;