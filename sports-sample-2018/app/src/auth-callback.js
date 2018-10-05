///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import {
    UserManager
} from 'oidc-client';
const mgr = new UserManager();
mgr.signinRedirectCallback().then(function(user) {
    const signInState = JSON.parse(sessionStorage.getItem('kuib.oidc.state')) || {
        returnUrl: '/'
    };

    sessionStorage.removeItem('kuib.oidc.state');

    window.history.replaceState({},
        window.document.title,
        window.location.origin + window.location.pathname);
    window.location = signInState.returnUrl;
});