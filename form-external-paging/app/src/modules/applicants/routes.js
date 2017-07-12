///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import applicantViewRoute from './applicant-view/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.applicants', {
            abstract: true,
            url: '/applicants',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'ApplicantsCtrl'
                }
            }
        });

    applicantViewRoute($stateProvider);
}

export default routing;