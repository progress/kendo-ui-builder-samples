///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import chartsDemoRoute from './charts-demo/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.charts', {
            abstract: true,
            url: '/charts',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'ChartsCtrl'
                }
            }
        });

    chartsDemoRoute($stateProvider);
}

export default routing;