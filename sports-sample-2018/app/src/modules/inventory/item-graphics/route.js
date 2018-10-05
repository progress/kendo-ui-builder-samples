///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
function routing($stateProvider) {
    $stateProvider
        .state('module.default.inventory.itemGraphics', {
            url: '/item-graphics',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'InventoryItemGraphicsCtrl',
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
                                name: 'views.inventory.item-graphics'
                            });
                        })
                        .then((module) => $injector.get('inventoryItemGraphics')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('inventoryItemGraphics')['onHide'](stateData);
            }]
        });
}

export default routing;