///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function service($q, loginModal) {

    function SessionProvider() {
        this.sessions = {};
    }

    function resolveErrorMessage(result, details) {
        var message = 'General Error';

        switch (result) {
            case progress.data.Session.AUTHENTICATION_FAILURE:
                message = 'Wrong Username or Password';
                break;
            case progress.data.Session.GENERAL_FAILURE:
                if (details instanceof Array) {
                    message = details[0].errorObject ? details[0].errorObject.message : message;
                } else {
                    message = details.errorObject ? details.errorObject.message : message;
                }
                break;
        }

        return {
            message: message
        };
    }

    SessionProvider.prototype = {
        getSession: function(provider, credentials) {
            return $q(function(resolve, reject) {
                progress.data.getSession({
                        name: provider.name,
                        authenticationModel: provider.authenticationModel,
                        serviceURI: provider.serviceUri,
                        catalogURI: provider.catalogUris,
                        username: credentials ? credentials.username : '',
                        password: credentials ? credentials.password : ''
                    })
                    .done(function(jsdosession) {
                        resolve(jsdosession);
                    })
                    .fail(function(result, details) {
                        reject({
                            result: result,
                            details: details
                        });
                    });
            });
        },

        tryLogin: function(provider) {
            return this.getSession(provider)
                .then((session) => {
                    return this.sessionCreated(session, provider.name);
                }, (error) => {
                    if (error.result === progress.data.Session.AUTHENTICATION_FAILURE) {
                        return this.openLogin(provider);
                    } else {
                        throw resolveErrorMessage(error.result, error.details);
                    }
                });
        },

        sessionCreated: function(session, providerName) {
            return this.sessions[providerName] = session;
        },

        openLogin: function(provider) {
            return loginModal.getInstance({
                provider: provider
            });
        },

        /*
         * This method is called from the loginModal
         * @param {object} provider - The data provider meta model
         * @param {object} metaModel - The credentials in the form of username and password.
         */
        login: function(provider, credentials) {
            return this.getSession(provider, credentials)
                .then((session) => this.sessionCreated(session, provider.name),
                    (error) => {
                        throw resolveErrorMessage(error.result, error.details);
                    });
        },

        logout: function() {
            return $q((resolve, reject) => {
                var promises = [];

                var wrapInResolvedPromise = function(promise) {
                    return $q(function(resolve, reject) {
                        promise.then(function() {
                            resolve();
                        }).fail(function(err) {
                            resolve(err);
                        });
                    });
                }

                for (var key in this.sessions) {
                    var session = this.sessions[key];

                    if (session.loginResult === 1) {
                        promises.push(wrapInResolvedPromise(session.logout()));
                    }
                }

                $q.all(promises).then((errors) => {
                    this.sessions = {};

                    progress.data.ServicesManager._services = [];
                    progress.data.ServicesManager._resources = [];
                    progress.data.ServicesManager._data = [];
                    progress.data.ServicesManager._sessions = [];

                    resolve();
                });
            });
        }
    };

    return new SessionProvider();
}

service.$inject = ['$q', 'loginModal'];

export default service;