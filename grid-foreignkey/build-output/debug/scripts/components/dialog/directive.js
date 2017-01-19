(function(angular) {
'use strict';


/*
All properties are optional, but it's good to supply at least 'title'

Usage:

$scope.$emit('dialog', {
    title: 'A text displayed in the title',
    hint: 'A text displayed in the content section.',
    className: '',
    okButton: {
        handler: function() {
            // this function is called on button click
        },
        text: 'Button text goes here',
        hidden: true // if you like to hide the button
        type: '' // not implemented yet
    },
    cancelButton: {
        // same props as okButton
    }
});
*/

    angular.module('grid-foreignkey')
        .directive('dialog', function () {
            return {
                templateUrl: 'scripts/components/dialog/template.html',
                controller: function($rootScope) {
                    var vm = this;

                    vm.options = {
                        width: 400,
                        resizable: false,
                        visible: false,
                        modal: true
                    };

                    vm.okButton = {};
                    vm.cancelButton = {};

                    $rootScope.$on('dialog', function(event, args) {
                        if(typeof args.okButton != 'object' && args.okButton == null) {
                            args.okButton = {};
                        }

                        if(typeof args.cancelButton != 'object' && args.cancelButton == null) {
                            args.cancelButton = {};
                        }

                        // dialog options
                        vm.hint = args.hint;
                        vm.className = args.className;
                        vm.dialog.setOptions({
                            title: args.title
                        });

                        // ok button options
                        vm.okButton.text = args.okButton.text || 'Ok';
                        vm.okButton.hidden = args.okButton.hidden || false;
                        vm.okButton.type = args.okButton.type || 'action';

                        // cancel button options
                        vm.cancelButton.text = args.cancelButton.text || 'Cancel';
                        vm.cancelButton.hidden = args.cancelButton.hidden || false;
                        vm.cancelButton.type = args.cancelButton.type || '';

                        // event handling
                        vm.onOk = function() {
                            (args.okButton.handler && args.okButton.handler());
                            vm.dialog.close();
                        };

                        vm.onCancel = function() {
                            (args.cancelButton.handler && args.cancelButton.handler());
                            vm.dialog.close();
                        };

                        // Open dialog
                        vm.dialog.open().center();
                    });
                },
                controllerAs: 'vm',
                scope: {},
                bindToController: true
            };
    });
})(angular);