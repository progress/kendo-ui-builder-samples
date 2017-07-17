///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            id: '@',
            options: '=',
        },
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: template
    };
}

function Controller($sce) {
    let vm = this;

    this.$onInit = () => {
        const tempElement = angular.element('<div />').html(vm.options.html);
        vm.html = $sce.trustAsHtml(tempElement.text());
    };
}

Controller.$inject = ['$sce'];

export default directive;