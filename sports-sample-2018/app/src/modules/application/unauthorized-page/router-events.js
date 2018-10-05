/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
/* global angular */

function factory($q, dsService) {

    function ApplicationunauthorizedPage() {
        this.scope = null;
    }

    ApplicationunauthorizedPage.prototype = {
        /*  The resolve method could return arbitrary data,
            which will be available in the view public controller's constructor as the "stateData" argument 
            and in "onHide" handler as the "customData" argument */
        onInit: function($stateParams) {
            console.log('Init', $stateParams);

            return {};
        },
        /* "customData" is the data return by the onInit handler*/
        onHide: function(customData) {
            console.log('hide', customData);
        }
    };

    return new ApplicationunauthorizedPage();
}

factory.$inject = ['$q', 'dsService'];

export default factory;