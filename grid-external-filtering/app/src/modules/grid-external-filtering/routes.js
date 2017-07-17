///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import gridExternalFilteringRoute from './grid-external-filtering/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.gridExternalFiltering', {
            abstract: true,
            url: '/grid-external-filtering',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'GridExternalFilteringCtrl'
                }
            }
        });

    gridExternalFilteringRoute($stateProvider);
}

export default routing;