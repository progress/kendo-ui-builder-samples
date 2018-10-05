///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.inventory.items', {
            url: '/items',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'InventoryItemsCtrl',
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
                                name: 'views.inventory.items'
                            });
                        })
                        .then((module) => $injector.get('inventoryItems')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('inventoryItems')['onHide'](stateData);
            }]
        });
}

export default routing;