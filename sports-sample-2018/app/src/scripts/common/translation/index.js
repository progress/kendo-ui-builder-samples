import angular from 'angular';

import translationLoader from './translation-loader';

export default angular.module('app.common.translation', [
        'pascalprecht.translate'
    ])
    .service('translationLoader', translationLoader)
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider
            .useLoader('translationLoader')
            .useSanitizeValueStrategy('escapeParameters')
            .fallbackLanguage('default');
    }])
    .name;