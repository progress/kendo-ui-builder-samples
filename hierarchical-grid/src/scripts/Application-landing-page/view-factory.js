/* global angular */
(function(angular) {

    angular
        .module('viewFactories')
        .factory('applicationLandingPage', ['$q', 'dsService', function($q, dsService) {

            function ApplicationLandingPage() {
                this.scope = null;
            }

            ApplicationLandingPage.prototype = {
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

                }
            };

            return new ApplicationLandingPage();
        }]);

})(angular);
