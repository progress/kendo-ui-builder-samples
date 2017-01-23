(function(angular) {

    angular
        .module('GridWithFormJFP')
        .filter('formatValue', function() { 
            return function(input, format) {
                if (input !== null && input !== undefined) {
                    return kendo.format(format, input);
                } else {
                    return '';
                }
            }
        })
})(angular);
