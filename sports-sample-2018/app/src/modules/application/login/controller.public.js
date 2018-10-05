/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import BaseController from './controller.js'

class LoginCtrl extends BaseController {
    constructor($scope, $injector, $sanitize, provider, jsdoSessions, stateData) {
        super($scope, $injector, $sanitize, provider, jsdoSessions);
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
    onShow($scope) {
        console.log('Show');
    }

    /**
     * Login event function.
     * Fires when the user clicks Login on the login view.
     *
     * Returns void to close the login view
     * or a Promise to tell the login view to wait for an asynchronous operation.
     */
    onLogin() {
        // TODO: Add user roles code here
    }
}

LoginCtrl.$inject = ['$scope', '$injector', '$sanitize', 'provider', 'jsdoSessions', 'stateData'];

export default LoginCtrl