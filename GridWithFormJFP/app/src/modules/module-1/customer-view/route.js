///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.module1.customerView', {
            url: '/customer-view',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'Module1CustomerViewCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["CustomerService", "SalesrepService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.module-1.customer-view'
                            });
                        })
                        .then((module) => $injector.get('module1CustomerView')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('module1CustomerView')['onHide'](stateData);
            }]
        });
}

export default routing;