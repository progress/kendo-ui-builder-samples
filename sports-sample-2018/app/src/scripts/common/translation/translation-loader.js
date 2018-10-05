///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

function translationLoader($http) {
    return function(options) {
        let lang = options.key !== 'default' ? options.key : 'translations.default';
        let url = 'translations/' + lang + '.json';

        return $http({
                method: 'GET',
                url: url
            })
            .then(function(response) {
                return response.data;
            });
    };
}

translationLoader.$inject = ['$http'];

export default translationLoader;