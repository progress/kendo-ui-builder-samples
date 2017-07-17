///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import template from './template.html';

function directive($compile) {
    const directive = {
        scope: true,
        transclude: true,
        bindToController: {
            model: '=',
            selected: '=',
            updateInProcess: '=',
            insertInProcess: '=',
            validator: '=',
            allowPaging: '@'
        },
        controller: DataFormController,
        controllerAs: 'vm',
        templateUrl: template
    };

    return directive;
}

directive.$inject = ['$compile'];

class DataFormController {
    constructor($scope) {
        this.$scope = $scope;
        this.selectedPage = 1;
    }

    $onInit() {
        this.ds = this.model.dataSource;
        this.ds.bind('change', (e) => this.changeHandler(e));

        if (this.allowPaging) {
            this.ds.read().then(() => {
                this.createSelection();
            });
        }

        this.$scope.$on('$destroy', () => this.destroy());
    }

    get validatorOptions() {
        return {
            errorTemplate: '<p class="input__required">#=message#</p>'
        };
    }

    prev() {
        var currentPage = this.ds.page();
        if (currentPage > 1) {
            this.selectedPage = currentPage - 1;
            this.ds.page(this.selectedPage);
        }
    }

    next() {
        var currentPage = this.ds.page();
        if (currentPage < this.ds.totalPages() - 1) {
            this.selectedPage = currentPage + 1;
            this.ds.page(this.selectedPage);
        }
    }

    pageTo() {
        if (this.selectedPage < this.ds.totalPages() - 1 &&
            this.selectedPage > 0) {
            this.ds.page(this.selectedPage);
        }
    }

    createSelection() {
        const view = this.ds.view();
        if (view.length && this.allowPaging) {
            this.$scope.$evalAsync(function() {
                this.selected = kendo.proxyModelSetters(view[0]);
            });
        }
    }

    changeHandler(e) {
        const view = this.ds.view();
        if (view.length && this.allowPaging) {
            this.selected = kendo.proxyModelSetters(view[0]);
        }
    }

    destroy() {
        this.ds.unbind('change');
    }
}

DataFormController.$inject = ['$scope'];

export default directive;