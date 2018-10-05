///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import angular from 'angular';
import modal from 'angular-ui-bootstrap/src/modal';

import authService from './auth-service.js';
import authenticationService from './authentication-service.js';
import dsService from './data-source-factory.js';
import emitService from './emit-service.js';
import jsdoSessions from './jsdo-sessions.js';
import loginModal from './login-modal.js';
import progressDataService from './progress-data-service.js';
import providerService from './provider-service.js';
import rolesService from './roles-service.js';
import translationsService from './translations-service.js';
import storageService from './storage-service.js';

export default angular.module('app.services', [modal])
    .service('authService', authService)
    .provider('authenticationService', authenticationService)
    .service('dsService', dsService)
    .service('emitService', emitService)
    .service('jsdoSessions', jsdoSessions)
    .service('loginModal', loginModal)
    .service('progressDataService', progressDataService)
    .service('providerService', providerService)
    .service('rolesService', rolesService)
    .service('translationsService', translationsService)
    .service('storageService', storageService)
    .name;