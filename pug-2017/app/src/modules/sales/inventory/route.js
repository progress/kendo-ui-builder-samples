///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.sales.inventory', {
            url: '/inventory',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'SalesInventoryCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SportsService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.sales.inventory'
                            });
                        })
                        .then((module) => $injector.get('salesInventory')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('salesInventory')['onHide'](stateData);
            }]
        });
}

export default routing;