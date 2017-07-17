///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customerCrud.listViewExternalForm', {
            url: '/list-view-external-form',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustomerCRUDListViewExternalFormCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["Customers"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.customer-crud.list-view-external-form'
                            });
                        })
                        .then((module) => $injector.get('customerCrudList-view-external-form')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('customerCrudList-view-external-form')['onHide'](stateData);
            }]
        });
}

export default routing;