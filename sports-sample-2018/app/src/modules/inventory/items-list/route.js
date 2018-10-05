///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.inventory.itemsList', {
            url: '/items-list',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'InventoryItemsListCtrl',
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
                                name: 'views.inventory.items-list'
                            });
                        })
                        .then((module) => $injector.get('inventoryItemsList')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('inventoryItemsList')['onHide'](stateData);
            }]
        });
}

export default routing;