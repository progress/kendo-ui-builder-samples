///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import inventoryGraphicalRoute from './inventory-graphical/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.inventory', {
            abstract: true,
            url: '/inventory',
            authorization: {
                allowedRoles: []
            },
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'InventoryCtrl'
                }
            }
        });

    inventoryGraphicalRoute($stateProvider);
}

export default routing;