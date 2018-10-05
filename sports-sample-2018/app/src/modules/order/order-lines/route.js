///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.order.orderLines', {
            url: '/order-lines',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'OrderOrderLinesCtrl',
            controllerAs: 'vm',
            authorization: {
                allowedRoles: []
            },
            data: {
                providers: ["Sports"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.order.order-lines'
                            });
                        })
                        .then((module) => $injector.get('orderOrderLines')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('orderOrderLines')['onHide'](stateData);
            }]
        });
}

export default routing;