///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.applicants.applicantView', {
            url: '/applicant-view',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ApplicantsApplicantViewCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["SemanticTypes", "SemanticTypes"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.applicants.applicant-view'
                            });
                        })
                        .then((module) => $injector.get('applicantsApplicantView')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('applicantsApplicantView')['onHide'](stateData);
            }]
        });
}

export default routing;