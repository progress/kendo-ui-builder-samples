///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import familyGraphicalRoute from './family-graphical/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.personal', {
            abstract: true,
            url: '/personal',
            authorization: {
                allowedRoles: []
            },
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'PersonalCtrl'
                }
            }
        });

    familyGraphicalRoute($stateProvider);
}

export default routing;