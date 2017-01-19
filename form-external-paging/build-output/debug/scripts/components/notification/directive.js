(function(angular) {
'use strict';

    angular.module('form-external-paging')
        .directive('notification', function () {
            return {
                templateUrl: 'scripts/components/notification/template.html',
                controller: function($rootScope) {
                    var vm = this;

                    vm.options = {
                        animation: {
                            open: {
                                effects: "slideIn:down"
                            },
                            close: {
                                effects: "slideIn:down",
                                reverse: true
                            },
                        },
                        autoHideAfter: 0,
                        hideOnClick: true,
                        position: {
                            top: 60,
                            left: "37%"
                        },
                        width: 500
                    };

                    $rootScope.$on('notification', function(event, args) {
                        vm.notification.show(args.message, args.type);
                    });
                },
                controllerAs: 'vm',
                scope: {},
                bindToController: true
            };
    });
})(angular);
