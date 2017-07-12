///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.employees.employeeView', {
            url: '/employee-view',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'EmployeesEmployeeViewCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["EmployeeService"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.employees.employee-view'
                            });
                        })
                        .then((module) => $injector.get('employeesEmployeeView')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('employeesEmployeeView')['onHide'](stateData);
            }]
        });
}

export default routing;