var app = angular.module('ion-fab-button', [])

    app.directive('fabButtonRight', function fabButtonDirective() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link
        };
        //isAnchor
        function isAnchor(attr) {
            return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
        }
        //template
        function template(element, attr) {
            return isAnchor(attr) ?
                '<a class="fab-button-right" ng-transclude></a>' :
                '<button class="fab-button-right" ng-transclude></button>';
        }
        //link
        function link(scope, element, attr) {
            var target = '#'+attr['targetId'];
            //var bgColor = attr['bg-color'];
            //element.style=bgColor;
            var targetEl = angular.element(document.querySelector(target));
            var savePos = 0;
            targetEl.bind('scroll', function (e) {
                //console.log(savePos)
                if (savePos < e.detail.scrollTop) {
                    savePos = e.detail.scrollTop;
                    element.removeClass('zoomIn animated');
                    element.addClass('zoomOut animated');
                }
                if (savePos > e.detail.scrollTop) {
                    savePos = e.detail.scrollTop;
                    element.removeClass('zoomOut animated');
                    element.addClass('zoomIn animated');
                }
                // var timeout = setInterval(function(){
                //     element.removeClass('zoomOut animated');
                //     element.addClass('zoomIn animated');
                // },3000);
            });
        }
    });

    app.directive('fabButtonLeft', function fabButtonDirective() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link1
        };
        //isAnchor
        function isAnchor(attr) {
            return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
        }
        //template
        function template(element, attr) {
            return isAnchor(attr) ?
                '<a class="fab-button-left" ng-transclude></a>' :
                '<button class="fab-button-left" ng-transclude></button>';
        }
        //link
        function link1(scope, element, attr) {
            var target = '#'+attr['targetId'];
            //var bgColor = attr['bg-color'];
            //element.style=bgColor;
            var targetEl = angular.element(document.querySelector(target));
            var savePos = 0;
            targetEl.bind('scroll', function (e) {
                //console.log(savePos)
                if (savePos < e.detail.scrollTop) {
                    savePos = e.detail.scrollTop;
                    element.removeClass('fadeInUp animated');
                    element.addClass('fadeOutDown animated');
                }
                if (savePos > e.detail.scrollTop) {
                    savePos = e.detail.scrollTop;
                    element.removeClass('fadeOutDown animated');
                    element.addClass('fadeInUp animated');
                }
            });
        }
    });