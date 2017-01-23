(function(angular) {
    
    angular
        .module('master-detail-grids')
        .service('loginModal', ['$injector', '$uibModal' , function ($injector, $uibModal) {
            return {
                getInstance: function(resolve) {
                    var instance = $uibModal.open({
                        templateUrl: 'modules/system-module/login/index.html',
                        controller: 'LoginCtrl',
                        controllerAs: 'loginCtrl',
                        resolve: resolve
                    });

                    instance.opened.then(function() {
                        $injector.get('applicationLogin')['onShow']();
                    });

                    instance.closed.then(function() {
                        $injector.get('applicationLogin')['onHide']();
                    });

                    return instance.result;
                }
            };
        }]);

})(angular);