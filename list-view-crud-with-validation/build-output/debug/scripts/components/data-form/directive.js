'use strict';

angular.module('components')
    .directive('dataForm', ['$compile', dataForm]);

function dataForm($compile) {
    var directive = {
        templateUrl: 'scripts/components/data-form/template.html',
        controller: DataFormController,
        controllerAs: 'vm',
        scope: {},
        bindToController: {
            model: '=',
            selected: '=',
            updateInProcess: '=',
            insertInProcess: '=',
            validator: '=',
            allowPaging: '@'
        },
        link: link
    };

    return directive;

    function link(scope, elem, attrs, controller) {
        var element = elem.find('.componentsContainer').first();
        var fieldsLength = controller.model.fields.length;
        var root = angular.element('<div class="row" />');
        var leftCol = angular.element('<div class="col-md-6" />');
        var rightCol = angular.element('<div class="col-md-6" />');

        for (var i = 0 ; i < fieldsLength; i++) {
            var field = controller.model.fields[i];
            var dataOptions = {};

            if (field.range) {
                if (field.range.min !== undefined) {
                    dataOptions.min = field.range.min;
                }
                if (field.range.max !== undefined) {
                    dataOptions.max = field.range.max;
                }
            }

            switch (field.editorType) {
                case 'email-text-box':
                    dataOptions.placeholder = 'john.doe@example.net';
                break;
                case 'url-text-box':
                    dataOptions.placeholder = 'http://examplewebsite.net';
                break;
                case 'phone-text-box':
                    dataOptions.mask = '(999) 000-0000';
                break;
            }

            field.dataOptions = dataOptions;

            var row = angular.element('<div class="row" ng-if="!vm.updateInProcess && !vm.insertInProcess">' +
                                        '<div class="col-md-5">' + field.label + '</div>' + 
                                        '<div class="col-md-7">' + '{{vm.selected.' + field.name + '| formatValue: "' + field.format + '" }}</div>' +
                                    '</div>' +
                                    '<div class="row" ng-if="vm.updateInProcess || vm.insertInProcess">' + 
                                        '<div class="col-md-5">' + 
                                            '<label for="' + field.id + '">' + field.label + '</label>' + 
                                        '</div>' + 
                                        '<div class="col-md-7">' + 
                                            '<' + field.editorType + ' ' + 
                                                'data-widget = "'+ field.id + '" ' + 
                                                'data-title = "'+ field.label + '" ' + 
                                                'data-id = "'+ field.id + '" '+ 
                                                'data-model = "vm.selected.' + field.name + '" ' + 
                                                'data-validation = "vm.model.fields[' + i + '].validation"' + 
                                                'data-validator = "vm.validator"' + 
                                                 'data-options = "vm.model.fields[' + i + '].dataOptions"' + '>' +
                                            '</' + field.editorType + '>' + 
                                        '</div>' + 
                                    '</div>');

            if (i < fieldsLength / 2) {
                leftCol.append(row);
            } else {
                rightCol.append(row);
            }
        }

        root.append(leftCol)
            .append(rightCol);

        element.append(root);

        $compile(element)(scope);
    }
}

DataFormController.$inject = ['$scope'];


function DataFormController($scope) {
    var vm = this;
    vm.selectedPage = 1;
    vm.dataSource = vm.model.dataSource;

    vm.validatorOptions = {
        errorTemplate: '<p class="input__required">#=message#</p>'
    };

    vm.dataSource
        .bind('change', changeHandler);

    if (vm.allowPaging) {
        vm.dataSource.read().then(function() {
            createSelection();
        });
    }

    vm.prev = function() {
        var currentPage = vm.dataSource.page();
        if (currentPage > 1) {
            vm.selectedPage = currentPage - 1;
            vm.dataSource.page(vm.selectedPage);
        }
    }

    vm.next = function () {
        var currentPage = vm.dataSource.page();
        if (currentPage < vm.dataSource.totalPages() - 1) {
            vm.selectedPage = currentPage + 1;
            vm.dataSource.page(vm.selectedPage);
        }
    }

    vm.pageTo = function () {
        if (vm.selectedPage < vm.dataSource.totalPages() - 1 &&
            vm.selectedPage > 0) {
            vm.dataSource.page(vm.selectedPage);
        }
    }

    function createSelection() {
        var view = vm.dataSource.view();
        if (view.length && vm.allowPaging) {
            $scope.$evalAsync(function() {
                vm.selected = kendo.proxyModelSetters(view[0]);
            });
        }
    }

    function changeHandler(e) {
        var view = vm.dataSource.view();
        if (view.length && vm.allowPaging) {
            vm.selected = kendo.proxyModelSetters(view[0]);
        }
    }

    $scope.$on('$destroy', function() {
        vm.dataSource
            .unbind('change');
    });
}