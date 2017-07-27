///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import locationsRoute from './locations/route.js';
import repsRoute from './reps/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.management', {
            abstract: true,
            url: '/management',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'ManagementCtrl'
                }
            }
        });

    locationsRoute($stateProvider);
    repsRoute($stateProvider);
}

export default routing;