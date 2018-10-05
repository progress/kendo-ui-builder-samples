///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.inventory.inventoryGraphical', {
            url: '/inventory-graphical',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'InventoryInventoryGraphicalCtrl',
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
                                name: 'views.inventory.inventory-graphical'
                            });
                        })
                        .then((module) => $injector.get('inventoryInventory_graphical')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('inventoryInventory_graphical')['onHide'](stateData);
            }]
        });
}

export default routing;