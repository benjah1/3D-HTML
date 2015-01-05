var App = angular.module('ppt', []);

App.directive('liveEditor', [ function() {

	console.log('hello world');

	var template = '\
		<div class="cssEditor">\
			<textarea ng-model="cssEditor"></textarea>\
		</div>\
		<div class="codeEditor">\
			<textarea ng-model="codeEditor"></textarea>\
		</div>\
		<div class="preview">\
			<iframe></iframe>\
		</div>\
		';

	var link = function ($scope, element) {
		var body = jQuery(element).find('iframe').contents().find('body');
		body.html('<style id="styler"></style><div id="container"></div>');

		var styler = body.find('#styler');
		var container = body.find('#container');

		$scope.cssEditor = $scope.css;
		$scope.codeEditor = $scope.code;

		$scope.$watch('cssEditor', function(val){
			styler.html(val);
		});

		$scope.$watch('codeEditor', function(val){
			container.html(val);
		});
	};
	
	return {
		restrict: 'A',
		//transclude: false,
		link: link,
		scope: {
			css: '@css',
			code: '@code'
		},
    template: template
	};

}]);