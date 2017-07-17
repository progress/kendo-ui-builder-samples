///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import listViewExternalFormRoute from './list-view-external-form/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customerCrud', {
            abstract: true,
            url: '/customer-crud',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'CustomerCRUDCtrl'
                }
            }
        });

    listViewExternalFormRoute($stateProvider);
}

export default routing;