///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class EmitService {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    emit(key, argument = {}) {
        this.$rootScope.$emit(key, argument);

        return argument;
    }

    on(key, handler) {
        return this.$rootScope.$on(key, (event, argument) => {
            argument.defaultPrevented = false;
            handler(event, argument);
        });
    }
}

EmitService.$inject = ['$rootScope'];

export default EmitService;