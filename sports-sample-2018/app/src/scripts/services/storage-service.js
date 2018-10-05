///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

const KEY_PREFIX = '$kuib.';

class StorageService {
    constructor($window) {
        this.ls = $window.localStorage;
    }

    setItem(key, value) {
        this.ls.setItem(KEY_PREFIX + key, angular.toJson(value));
    }

    getItem(key) {
        return angular.fromJson(this.ls.getItem(KEY_PREFIX + key));
    }

    removeItem(key) {
        this.ls.removeItem(KEY_PREFIX + key);
    }
}

StorageService.$inject = ['$window'];

export default StorageService;