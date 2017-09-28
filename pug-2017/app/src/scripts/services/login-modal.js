///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function service($injector, $uibModal) {
    return {
        getInstance: function(resolve) {
            var instance = $uibModal.open({
                backdrop: false,
                template: require('./../../modules/application/login/index.html'),
                controller: 'LoginCtrl',
                controllerAs: 'loginCtrl',
                resolve: resolve
            });

            return instance.result;
        }
    };
}

service.$inject = ['$injector', '$uibModal'];

export default service;