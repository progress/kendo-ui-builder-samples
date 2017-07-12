///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

const SideNavigationCtrl = function($scope, $element, $state) {
    var SCREEN_MD = 1024;
    var wnd = angular.element(window);
    var overlay = angular.element('.kuib-main-content-overlay');

    activate();

    function activate() {
        var state = $state.current.name;
        var parentState = getParentState(state);

        if ($element.find('ul').attr('kendo-treeview') !== undefined) {
            $element
                .find('li[data-state="' + parentState + '"]')
                .attr('data-expanded', true);
        } else {
            initSideNavAdaptiveness();

            $element
                .find('li[data-state="' + parentState + '"]')
                .addClass('k-state-active');

            selectElementByState(state);
        }
    }

    function selectElementByState(state) {
        $element
            .find('li[data-state="' + state + '"]')
            .children(':first')
            .addClass('k-state-selected');
    }

    function getParentState(state) {
        return state.split(".").slice(0, -1).join('.');
    }

    function stateChangeSuccess(event, toState, toParams) {
        var state = toState.name;
        var parentState = getParentState(state);
        var widget = $scope.widget;
        var collapseSelector = widget instanceof kendo.ui.TreeView ?
            'li[data-expanded=true]' : 'li.k-state-active';
        var windowWidth = wnd.width();

        widget.collapse(collapseSelector + ':not([data-state="' + parentState + '"])');
        widget.select('li[data-state="' + state + '"]');

        if (windowWidth <= SCREEN_MD) {
            $element.addClass('mobile-navigation');
            overlay.hide();
            widget.select('.k-state-active');
            widget.collapse('.k-state-active');
        }
    }

    function stateChangeStart(event, toState, toParams, fromState, fromParams, options) {
        //restore selection until the requested state is resolved
        $scope.widget.select('li[data-state="' + fromState.name + '"]');
    }

    function initSideNavAdaptiveness() {
        $scope.$on('kendoWidgetCreated', function(event, widget) {
            if (widget === $scope.widget) {
                var resizeTimer;
                var windowWidth = wnd.width();

                wnd.resize(function() {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function() {
                        windowWidth = wnd.width();
                        if (windowWidth <= SCREEN_MD) {
                            widget.collapse('.k-state-active');
                            $element.addClass('mobile-navigation');
                            overlay.hide();

                            var parentState = getParentState($state.current.name);
                            widget.select('li[data-state="' + parentState + '"]');
                        } else {
                            widget.expand('.k-state-highlight');
                            overlay.show();
                        }
                    }, 250);
                });

                if (windowWidth <= SCREEN_MD) {
                    widget.select('.k-state-active');
                    widget.collapse('.k-state-active');
                }

                widget.bind('expand', function(e) {
                    var state = $state.current.name;
                    widget.select('li[data-state="' + state + '"]');
                });

                widget.bind('select', function(e) {
                    if (windowWidth <= SCREEN_MD) {
                        if (!angular.element(e.item).hasClass('nav-item')) {
                            $element.removeClass('mobile-navigation');
                            overlay.show();
                        }

                        var oldState = $state.current.name;
                        if (angular.element(e.item).data('state') === oldState) {
                            widget.select('.k-state-active');
                            widget.collapse('.k-state-active');
                            $element.addClass('mobile-navigation');
                            overlay.hide();
                        }
                    }
                });
            }
        });
    }

    $scope.$root.$on('$stateChangeStart', stateChangeStart);
    $scope.$root.$on('$stateChangeSuccess', stateChangeSuccess);
};

SideNavigationCtrl.$inject = ['$scope', '$element', '$state'];

export default SideNavigationCtrl