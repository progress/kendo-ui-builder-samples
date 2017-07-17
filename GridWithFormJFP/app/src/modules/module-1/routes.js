///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import customerViewRoute from './customer-view/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.module1', {
            abstract: true,
            url: '/module-1',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'Module1Ctrl'
                }
            }
        });

    customerViewRoute($stateProvider);
}

export default routing;