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
            widget: '=',
        },
        link: function(scope, element, ) {

        },
        controller: ['$scope', '$element', '$state', 'authService', function($scope, $element, $state, authService) {
            const vm = this;
            const SCREEN_MD = 1024;
            const wnd = angular.element(window);
            const overlay = angular.element('.kuib-main-content-overlay');

            $scope.$watch(function() {
                return vm.widget;
            }, () => {
                removeElementsWithNoPermission($element);
            });

            const widgetCreatedHandler = $scope.$on("kendoWidgetCreated", function(event, widget) {
                if (widget === vm.widget) {
                    const state = $state.current.name;
                    initSideNavAdaptiveness();

                    if (angular.element(window).width() > SCREEN_MD) {
                        selectNavigationNode(widget, state);
                    }
                }
                widgetCreatedHandler();
            });

            function removeElementsWithNoPermission(element) {
                element
                    .find('[data-state]')
                    .each((index, el) => {
                        const element = angular.element(el);
                        const stateName = angular.element(element).attr('data-state');
                        const state = $state.get(stateName);

                        if (!authService.isAuthorized(state.authorization)) {
                            vm.widget.remove(element.closest('.k-item'));
                        }
                    });
            }

            function initSideNavAdaptiveness() {
                const widget = vm.widget;
                const parentState = getParentState($state.current.name);
                let resizeTimer;
                let windowWidth = wnd.width();

                wnd.resize(function() {
                    clearTimeout(resizeTimer);

                    resizeTimer = setTimeout(function() {
                        windowWidth = wnd.width();
                        if (windowWidth <= SCREEN_MD) {
                            widget.collapse('.k-state-active');
                            $element.parent().addClass('mobile-navigation');
                            overlay.hide();

                            widget.select('[data-state="' + parentState + '"]');
                        } else {
                            widget.expand('[data-state="' + parentState + '"]');
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
                    widget.select('[data-state="' + state + '"]');
                });

                widget.bind('select', function(e) {
                    if (windowWidth <= SCREEN_MD) {
                        if (!angular.element(e.item).hasClass('nav-item')) {
                            $element.parent().removeClass('mobile-navigation');
                            overlay.show();
                        }

                        var oldState = $state.current.name;
                        if (angular.element(e.item).data('state') === oldState) {
                            widget.select('.k-state-active');
                            widget.collapse('.k-state-active');
                            $element.parent().addClass('mobile-navigation');
                            overlay.hide();
                        }
                    }
                });
            }

            function stateChangeSuccess(event, toState, toParams) {
                const widget = vm.widget;

                selectNavigationNode(widget, toState.name);

                if (wnd.width() <= SCREEN_MD) {
                    $element.parent().addClass('mobile-navigation');
                    overlay.hide();
                    widget.select('.k-state-active');
                    widget.collapse('.k-state-active');
                }
            }

            function stateChangeStart(event, toState, toParams, fromState, fromParams, options) {
                //restore selection until the requested state is resolved
                vm.widget.select($element.find(('[data-state="' + fromState.name + '"]')).closest('.k-item'));
            }

            $scope.$root.$on('$stateChangeStart', stateChangeStart);
            $scope.$root.$on('$stateChangeSuccess', stateChangeSuccess);

            function selectNavigationNode(widget, state) {
                const parentState = getParentState(state);

                //initSideNavAdaptiveness();
                widget.expand($element.find('[data-state="' + parentState + '"]').closest('.k-item'));
                widget.select($element.find('[data-state="' + state + '"]').closest('.k-item'));
                $element.find('.k-state-selected').removeClass('k-state-selected');
                $element.find('[data-state="' + state + '"] .k-link').addClass('k-state-selected');
            }

            function getParentState(state) {
                return state.split(".").slice(0, -1).join('.');
            }
        }],
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;