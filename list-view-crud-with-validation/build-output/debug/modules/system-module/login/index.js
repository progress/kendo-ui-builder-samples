(function(angular) {
    'use strict';


    angular.module('views')
        .controller('LoginCtrl', ['$scope', '$injector', 'provider', 'jsdoSessions', function($scope, $injector, provider, jsdoSessions) {
            var vm = this;

            vm.$onInit = function() {
                //Pass reference to the current scope.
                $injector.get('applicationLogin')['onInit'](vm);
            };

            vm.provider = provider;
            vm.message = '';
            vm.errored = false;
            vm.loading = false;
            vm.title = '<Title>',
            vm.customSections = {
                top:  'extensions/html/Application-login/topSection.html',
                middle: 'extensions/html/Application-login/middleSection.html',
                bottom: 'extensions/html/Application-login/bottomSection.html'
            };

            function onError(err) {
                vm.form.$setPristine();
                vm.form.$setUntouched();
                vm.password = '';
                vm.errored = true;
                vm.message = err.message;
            }

            function onSuccess() {
                $injector.get('applicationLogin')['onLogin']();
                $scope.$close();
            }

            function onRequestEnd() {
                vm.loading = false;
            }

            vm.onSubmit = function() {
                vm.loading = true;

                jsdoSessions.login(provider, { username: vm.username, password: vm.password })
                    .then(onSuccess)
                    .catch(onError)
                    .finally(onRequestEnd);
            };

            vm.onClose = function() {
                $scope.$dismiss();
            };
        }]);
})(angular);
