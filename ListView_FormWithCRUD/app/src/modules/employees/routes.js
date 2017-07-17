///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import employeeViewRoute from './employee-view/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.employees', {
            abstract: true,
            url: '/employees',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'EmployeesCtrl'
                }
            }
        });

    employeeViewRoute($stateProvider);
}

export default routing;