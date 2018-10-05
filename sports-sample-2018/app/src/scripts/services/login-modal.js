///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function service($rootScope, $injector, $uibModal) {
    function LoginModal() {
        this.stateData = {};
    }

    LoginModal.prototype = {
        setStateData: function(value) {
            this.stateData = value;
        },

        getStateData: function() {
            return this.stateData;
        },

        getInstance: function(resolve) {
            resolve.stateData = this.getStateData();

            var modalScope = $rootScope.$new();
            modalScope.modalInstance = $uibModal.open({
                backdrop: false,
                template: require('./../../modules/application/login/index.html'),
                controller: 'LoginCtrl',
                controllerAs: 'loginCtrl',
                resolve: resolve,
                scope: modalScope
            });

            return modalScope.modalInstance.result;
        }
    }

    return new LoginModal();
}

service.$inject = ['$rootScope', '$injector', '$uibModal'];

export default service;