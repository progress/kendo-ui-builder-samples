///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.gridExternalFiltering.gridExternalFiltering', {
            url: '/grid-external-filtering',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'GridExternalFilteringGridExternalFilteringCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["CustomerService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.grid-external-filtering.grid-external-filtering'
                            });
                        })
                        .then((module) => $injector.get('gridExternalFilteringGrid-external-filtering')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('gridExternalFilteringGrid-external-filtering')['onHide'](stateData);
            }]
        });
}

export default routing;