(function(angular, kendo){
    'use strict';

    angular.module('form-with-crud')
        .controller('SideNavigationCtrl', function ($scope, $element, $state) {
            activate();
            var isStateChange = false;

            function activate() {
                var state = $state.current.name;
                var parentState = state.split(".").slice(0, -1).join('.');

                initSideNavAdaptiveness();

                if ($element.find('ul').attr('kendo-treeview') !== undefined) {
                     $element
                        .find('li[data-state="' + parentState + '"]')
                        .attr('data-expanded', true);
                } else {
                    $element
                        .find('li[data-state="' + parentState + '"]')
                        .addClass('k-state-active')
                }

                $element
                    .find('li[data-state="' + state + '"]')
                    .children(':first')
                    .addClass('k-state-selected');
            }

            function stateChangeSuccess(event, toState, toParams) {
                var state = toState.name;
                var parentState = state.split(".").slice(0, -1).join('.');
                var widget = $scope.widget;
                var collapseSelector = widget instanceof kendo.ui.TreeView ?
                    'li[data-expanded=true]' :'li.k-state-active';

                widget.collapse(collapseSelector + ':not([data-state="' + parentState + '"])');
                isStateChange = true;
                widget.select('li[data-state="' + state + '"]');
            }

            function stateChangeStart(event, toState, toParams, fromState, fromParams, options) {
                isStateChange = true;
                //restore selection until the requested state is resolved
                $scope.widget.select('li[data-state="' + fromState.name + '"]');
            }

            function initSideNavAdaptiveness() {
                var SCREEN_MD = 1024;
                $scope.$on('kendoWidgetCreated', function(event, widget) {
                    if (widget === $scope.widget) {
                        var wnd = angular.element(window);
                        var windowWidth = wnd.width();

                        wnd.resize(function() {
                            windowWidth = wnd.width();
                            if(windowWidth <= SCREEN_MD) {
                                widget.collapse('.k-state-active');
                                $element.addClass('mobile-navigation');
                            }
                        });

                        if (windowWidth <= SCREEN_MD) {
                            widget.collapse('.k-state-active');
                        }

                        widget.bind('select', function(e) {
                            if (!isStateChange) {
                                if (windowWidth <= SCREEN_MD) {
                                    if (angular.element(e.item).hasClass('nav-item')) {
                                        $element.addClass('mobile-navigation');
                                        widget.collapse('.k-state-active');
                                    } else {
                                        $element.removeClass('mobile-navigation');
                                    }
                                }
                            } else {
                                isStateChange = false;
                            }
                        });
                    }
                });
            }

            $scope.$root.$on('$stateChangeStart', stateChangeStart);
            $scope.$root.$on('$stateChangeSuccess', stateChangeSuccess);
        });
})(angular, kendo);
