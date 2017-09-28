///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class ProviderService {
    constructor($injector) {
        this.dataProviders = null;
        this.injector = $injector;
        this.registeredProviders = [];
    }

    providers() {
        return this.injector.get('$q')((resolve, reject) => {
            if (this.dataProviders) {
                resolve(this.dataProviders);
            } else {
                this.injector
                    .get('$http')
                    .get('data-providers.json')
                    .then(
                        (res) => resolve(this.dataProviders = res.data),
                        (res) => reject({
                            message: res.data
                        }));
            }
        });
    }

    registerProvider(providerName) {
        return this.registeredProviders.push(providerName);
    }

    tryRegisterProvider(providerName) {
        return this.providers().then((providers) => {
            let promise;
            const provider = providers[providerName];

            switch (provider.type) {
                case 'progress-data-provider':
                case 'data-provider':
                    promise = this.injector.get('jsdoSessions')
                        .tryLogin(provider)
                        .then(() => this.registerProvider(providerName));
                    break;
                case 'odata-provider':
                    promise = Promise
                        .resolve(providerName)
                        .then(() => this.registerProvider(providerName));
                    break;
                case 'rest-data-provider':
                    promise = Promise
                        .resolve(providerName)
                        .then(() => this.registerProvider(providerName));
                    break;
                default:
                    promise = Promise
                        .reject({
                            message: 'Unknown provider type ' + provider.type
                        });
            }

            return promise;
        });
    }

    unRegisterProviders() {
        this.registeredProviders = [];

        return this.injector.get('jsdoSessions').logout();
    }

    getTransport(providerName, transportDef) {
        const provider = this.dataProviders[providerName];
        const serviceUri = provider.serviceUri;

        switch (provider.type) {
            case 'odata-provider':
                transportDef.read.url = serviceUri + transportDef.read.url;
                transportDef.create.url = serviceUri + transportDef.read.url;
                const updateUrl = transportDef.update.url;
                transportDef.update.url = (data) => {
                    return updateUrl;
                };
                const destroyUrl = transportDef.destroy.url;
                transportDef.destroy.url = (data) => {
                    return destroyUrl;
                };
                break;
            case 'rest-data-provider':
                for (const action in transportDef) {
                    let actionDefinition = transportDef[action];
                    if (typeof actionDefinition !== 'function') {
                        actionDefinition.url = serviceUri + actionDefinition.url;
                    }
                }
                break;
        }

        return transportDef;
    }
}

ProviderService.$inject = ['$injector'];

export default ProviderService;