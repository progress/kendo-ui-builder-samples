/* global angular */

function factory($q, dsService) {

    function Applicationlogin() {
        this.scope = null;
    }

    Applicationlogin.prototype = {
        /*  The resolve method could return arbitrary data,
            which will be available in the "viewShowHandler" and "viewHideHandler" handler as the customData argument */
        onInit: function($stateParams) {
            console.log('Init', $stateParams);

            return {};
        },
        /* "customData" is the data return by the viewInitHandler handler*/
        onHide: function(customData) {
            console.log('hide', customData);
        }
    };

    return new Applicationlogin();
}

factory.$inject = ['$q', 'dsService'];

export default factory;