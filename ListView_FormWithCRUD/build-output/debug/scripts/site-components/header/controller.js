(function(angular){
    'use strict';

    angular.module('ListView_FormWithCRUD')
        .controller('HeaderCtrl', function($scope, $state, jsdoSessions, $window, $document) {
            $scope.sessionCreated = false;
            $scope.shouldShowLoginTooltip = false;

            $scope.logout = function() {
                jsdoSessions.logout()
                    .then(function() {
                        activate();
                        $state.go('default.home');
                    })
                    .catch(function() {
                        //Error handling
                        $state.go('default.home');
                    });
            };

            $scope.onLoginClick = function() {
                $scope.shouldShowLoginTooltip = !$scope.shouldShowLoginTooltip;
            };

            angular.element($window).resize(hideLoginTooltip);
            angular.element($document).click(hideLoginTooltip);

            activate();

            function hideLoginTooltip(e) {
                if(angular.element(e.target).closest('.login').length > 0) {
                    return;
                }

                $scope.shouldShowLoginTooltip = false;
                $scope.$apply();
            }

            function activate() {
                $scope.sessionCreated = false;

                var watchHandler = $scope.$watch(function() { return jsdoSessions.sessions }, function(currentSession) {
                    if (!angular.element.isEmptyObject(currentSession)) {
                        $scope.sessionCreated = true;
                        watchHandler();
                    }
                }, true);
            }

            activate();
        });

})(angular);
