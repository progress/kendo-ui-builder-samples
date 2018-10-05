///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class ProgressDataService {
    constructor($q, rolesService) {
        this.rolesService = rolesService;
        this.$q = $q;
    }

    getUserRolesFromServer(options) {
        this.rolesService.clearRoles();

        try {
            const jsdo = new progress.data.JSDO(options.resource);
            return jsdo.invoke(options.method, options.inParam)
                .then((_jsdo, success, request) => {
                    if (request.response[options.outParam] instanceof Array) {
                        this.rolesService.setRoles(request.response[options.outParam]);
                    } else {
                        return this.$q.reject(new Error('Error: Array expected in call to method \'' + options.method + '\'.'));
                    }
                }, (_jsdo, success, request) => {
                    var message = '';
                    if (request.response instanceof Array) {
                        request.response.forEach((item) => {
                            if (item._errors && item._errors[0]) {
                                message += item._errors[0]._errorMsg + '\n';
                            }
                            if (item._retVal) {
                                message += 'Error: ' + item._retVal + '\n';
                            }
                        });
                    } else if (request.response &&
                        request.response._errors &&
                        request.response._errors[0]) {
                        message = request.response._errors[0]._errorMsg;
                    }
                    if (request.response && request.response._retVal) {
                        message += '\nError: ' + request.response._retVal;
                    }
                    return new Error('Error while executing getRolesFromServer(): ' + message);
                });
        } catch (e) {
            return this.$q.reject(e);
        }
    }

    clearUserRoles() {
        this.rolesService.clearRoles();
    }

    setUserRoles(array) {
        this.rolesService.setRoles(array);
    }
}

ProgressDataService.$inject = ['$q', 'rolesService'];

export default ProgressDataService;