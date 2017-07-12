import angular from 'angular';

import formatValue from './format-value';

export default angular.module('app.filters', [])
    .filter('formatValue', formatValue)
    .name;