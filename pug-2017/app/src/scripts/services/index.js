///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import angular from 'angular';
import modal from 'angular-ui-bootstrap/src/modal';

import jsdoSessions from './jsdo-sessions.js';
import loginModal from './login-modal.js';
import dsService from './data-source-factory.js';
import providerService from './provider-service.js';
import authService from './auth-service.js';

export default angular.module('app.services', [
        modal
    ])
    .service('jsdoSessions', jsdoSessions)
    .service('loginModal', loginModal)
    .service('dsService', dsService)
    .service('providerService', providerService)
    .service('authService', authService)
    .name;