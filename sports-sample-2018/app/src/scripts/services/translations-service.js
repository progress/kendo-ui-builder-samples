///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

const LANG_KEY = 'LANG';
const CULTURE_KEY = 'CULTURE';

class TranslationsService {
    constructor(storageService) {
        this.storageService = storageService;
    }

    getLanguage() {
        return this.storageService.getItem(LANG_KEY);
    }

    setLanguage(value) {
        this.storageService.setItem(LANG_KEY, value);
    }

    getCulture() {
        return this.storageService.getItem(CULTURE_KEY);
    }

    setCulture(value) {
        this.storageService.setItem(CULTURE_KEY, value)
    }
}

TranslationsService.$inject = ['storageService'];

export default TranslationsService;