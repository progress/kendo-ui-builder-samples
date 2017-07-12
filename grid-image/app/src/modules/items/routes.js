///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import itemDgRoute from './item-dg/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.items', {
            abstract: true,
            url: '/items',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'ItemsCtrl'
                }
            }
        });

    itemDgRoute($stateProvider);
}

export default routing;