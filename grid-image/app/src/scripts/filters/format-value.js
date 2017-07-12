'use strict';

function formatValue() {
    return function(input, format) {
        if (input !== null && input !== undefined) {
            return kendo.format((format || '{0}'), input);
        } else {
            return '';
        }
    }
}

export default formatValue;