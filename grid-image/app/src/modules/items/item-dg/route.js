///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.items.itemDg', {
            url: '/item-dg',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ItemsItemDGCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ItemService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.items.item-dg'
                            });
                        })
                        .then((module) => $injector.get('itemsItemDG')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('itemsItemDG')['onHide'](stateData);
            }]
        });
}

export default routing;