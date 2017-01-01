var app = angular.module('ion-fab-button', [])

    app.directive('fabButtonRight', function fabButtonDirective() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link,
            scope:{
              cssClass: "@",  //for additional custom styling
            }
        };
        //isAnchor
        function isAnchor(attr) {
            return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
        }
        //template
        function template(element, attr) {
            var cssClass = attr.cssClass? attr.cssClass: "";
            return isAnchor(attr) ?
                '<a class="fab-button-right ' + cssClass + '" ng-transclude></a>' :
                '<button class="fab-button-right ' + cssClass + '" ng-transclude></button>';
        }
        //link
        function link(scope, element, attr) {
            var target = '#'+attr['targetId'];
            //var bgColor = attr['bg-color'];
            //element.style=bgColor;
            var targetEl = angular.element(document.querySelector(target));
            var savePos = 0;
            var isIOS = ionic.Platform.isIOS();     //identify the device for animations calculations
            targetEl.bind('scroll', function (e) {
                var target = (isIOS && e.detail)? e.detail : e.target;  //get the target for scrollTop calculations
                if (savePos < target.scrollTop) {
                    savePos = target.scrollTop;
                    element.removeClass('zoomIn animated');
                    element.addClass('zoomOut animated');
                }
                if (savePos > target.scrollTop) {
                    savePos = target.scrollTop;
                    element.removeClass('zoomOut animated');
                    element.addClass('zoomIn animated');
                }
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
            var cssClass = attr.cssClass? attr.cssClass: "";
            return isAnchor(attr) ?
                '<a class="fab-button-left ' + cssClass + '" ng-transclude></a>' :
                '<button class="fab-button-left ' + cssClass + '" ng-transclude></button>';
        }
        //link
        function link1(scope, element, attr) {
            var target = '#'+attr['targetId'];
            //var bgColor = attr['bg-color'];
            //element.style=bgColor;
            var targetEl = angular.element(document.querySelector(target));
            var savePos = 0;
            var isIOS = ionic.Platform.isIOS();     //identify the device for animations calculations

            targetEl.bind('scroll', function (e) {
                var target = (isIOS && e.detail)? e.detail : e.target;  //get the target for scrollTop calculations
                if (savePos < target.scrollTop) {
                    savePos = target.scrollTop;
                    element.removeClass('fadeInUp animated');
                    element.addClass('fadeOutDown animated');
                }
                if (savePos > target.scrollTop) {
                    savePos = target.scrollTop;
                    element.removeClass('fadeOutDown animated');
                    element.addClass('fadeInUp animated');
                }
            });
        }
    });
