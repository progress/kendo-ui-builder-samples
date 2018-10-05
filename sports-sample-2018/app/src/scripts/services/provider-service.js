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

    // Obsolete: It is only used in older custom templates samples
    getTransport(providerName, transportDef) {
        const provider = this.dataProviders[providerName];
        const serviceUri = provider.serviceUri;

        function constructUrl(data, url, fields) {
            const values = fields.map(item => {
                const value = data[item.name];
                return item.type === 'string' ? `'${value}'` : value;
            });
            return serviceUri + kendo.format(url, values);
        }

        switch (provider.type) {
            case 'odata-provider':
                transportDef.read.url = serviceUri + transportDef.read.url;
                transportDef.create.url = serviceUri + transportDef.create.url;
                const updateUrl = transportDef.update.url;
                const updateFields = transportDef.update.fields;
                transportDef.update.url = (data) => {
                    return constructUrl(data, updateUrl, updateFields)
                };
                const destroyUrl = transportDef.destroy.url;
                const destroyFields = transportDef.destroy.fields;
                transportDef.destroy.url = (data) => {
                    return constructUrl(data, destroyUrl, destroyFields)
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

    getAbsoluteUrl(providerName, url, params) {
        const provider = this.dataProviders[providerName];

        if (!url) {
            return provider.serviceUri;
        }

        if (params) {
            switch (provider.type) {
                case 'rest-data-provider':
                    url = this._mapRestUrlParams(url, params);
                    break;

                case 'odata-provider':
                    url = this._mapODataUrlParams(url, params);
                    break;

                default:
                    break;
            }
        }

        return provider.serviceUri.replace(/[/]$/, '') + '/' + url;
    }

    _mapRestUrlParams(url, params) {
        for (let paramName in params) {
            const regEx = new RegExp(':' + paramName, 'gi');
            url = url.replace(regEx, params[paramName]);
        }

        return url;
    }

    _mapODataUrlParams(url, params) {
        const values = params.primaryKeys.map(item => {
            const value = params.options[item.name];
            return item.type === 'string' ? `'${value}'` : value;
        });

        return kendo.format(url, values);
    }
}

ProviderService.$inject = ['$injector'];

export default ProviderService;