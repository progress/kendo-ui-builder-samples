///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

const KEY = 'USER_ROLES';

class RolesService {
    constructor(storageService) {
        this.storageService = storageService;
    }

    getRoles() {
        return this.storageService.getItem(KEY);
    }

    setRoles(roles) {
        this.storageService.setItem(KEY, roles);
    }

    clearRoles() {
        this.storageService.removeItem(KEY);
    }
}

RolesService.$inject = ['storageService'];

export default RolesService;