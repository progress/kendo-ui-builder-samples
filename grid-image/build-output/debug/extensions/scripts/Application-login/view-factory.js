/* global angular */
(function(angular) {

    angular
        .module('viewFactories')
        .factory('applicationLogin', ['$q', 'dsService', function($q, dsService) {

            function ApplicationLogin() {
                this.scope = null;
            }

            ApplicationLogin.prototype = {
                /*  The resolve method could return arbitrary data, 
                    which will be available in the "viewShowHandler" and "viewHideHandler" handler as the customData argument */
                onInit: function($stateParams) {
                    return $q(function(resolve, reject) {
                        resolve({});
                    });
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onShow: function($scope, customData) {
                    this.scope = $scope;
                },
                /* "customData" is the data return by the viewInitHandler handler*/
                onHide: function(customData) {

                },
                /* Kendo event object*/
                onLogin: function() {

                }
            };

            return new ApplicationLogin();
        }]);

})(angular);
