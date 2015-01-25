'use strict';
var App = angular.module('ppt', [function(){
	(function ( document, window ) {	
		var throttle = function (fn, delay) {
			var timer = null;
			return function () {
				var context = this, args = arguments;
				clearTimeout(timer);
				timer = setTimeout(function () {
					fn.apply(context, args);
				}, delay);
			};
		};
		
		document.addEventListener('impress:init', function (event) {

			var api = event.detail.api;

			document.addEventListener('keydown', function ( event ) {
				if ( event.keyCode >= 33 && event.keyCode <= 34 ) {
					event.preventDefault();
				}
			}, false);
			
			document.addEventListener('keyup', function ( event ) {
				if ( event.keyCode >= 33 && event.keyCode <= 34 ) {
					switch( event.keyCode ) {
						case 33: // pg up
							api.prev();
							break;
						case 34: // pg down
							api.next();
							break;
					}
					
					event.preventDefault();
				}
			}, false);
			
			// delegated handler for clicking on the links to presentation steps
			document.addEventListener('click', function ( event ) {
				// event delegation with 'bubbling'
				// check if event target (or any of its parents is a link)
				var target = event.target;
				while ( (target.tagName !== 'A') &&
						(target !== document.documentElement) ) {
					target = target.parentNode;
				}
				
				if ( target.tagName === 'A' ) {
					var href = target.getAttribute('href');
					
					// if it's a link to presentation step, target this step
					if ( href && href[0] === '#' ) {
						target = document.getElementById( href.slice(1) );
					}
				}
				
				if ( api.goto(target) ) {
					event.stopImmediatePropagation();
					event.preventDefault();
				}
			}, false);
			
			// touch handler to detect taps on the left and right side of the screen
			// based on awesome work of @hakimel: https://github.com/hakimel/reveal.js
			document.addEventListener('touchstart', function ( event ) {
				if (event.touches.length === 1) {
					var x = event.touches[0].clientX,
						width = window.innerWidth * 0.3,
						result = null;
						
					if ( x < width ) {
						result = api.prev();
					} else if ( x > window.innerWidth - width ) {
						result = api.next();
					}
					
					if (result) {
						event.preventDefault();
					}
				}
			}, false);
			
			// rescale presentation when window is resized
			window.addEventListener('resize', throttle(function () {
				// force going to active step again, to trigger rescaling
				api.goto( document.querySelector('.active'), 500 );
			}, 250), false);
			
		}, false);
			
	})(document, window);

	window.impress().init();
}]);

App.controller('impress', ['$scope', function($scope) {

var cube = '\
	<div class="front obj"></div>\
	<div class="back obj"></div>\
	<div class="left obj"></div>\
	<div class="right obj"></div>\
	<div class="top obj"></div>\
	<div class="bottom obj"></div>'; 

var cubeDom = '<div class="ground obj"><div class="cube obj">' + cube + '</div></div>';
var cubeDom2 = '<div class="ground obj"><div class="cube obj"><div class="animate obj">' + cube + '</div></div></div>';
var cubeDom3 = '<div class="ground obj"><div class="cube obj"><div class="animate1 obj"><div class="animate2 obj">' + cube + '</div></div></div></div>';


var cubeCss = '\
	.obj {\
		position:absolute;\
		width:0;\
		height:0;\
		transform-style:preserve-3d;\
	}\
	.ground {\
		width: 200px;\
		height: 200px;\
		top: 0px;\
		left: 50px;\
		background-color: #ccc;\
		transform: rotateX(80deg) translateZ(-80px);\
	}\
	.front, .back,\
	.left, .right,\
	.top, .bottom {\
		width:100px;\
		height:100px;\
		content:"";\
		position:absolute;\
		left: -50px;\
		top: -50px;\
	}\
	.front, .back {\
		background-color: red;\
	}\
	.left, .right {\
		background-color: green;\
	}\
	.top, .bottom {\
		background-color: blue;\
	}\
	.front {\
		transform: rotateX(-90deg) translateZ(50px);\
	}\
	.back {\
		transform: rotateX(-90deg) translateZ(-50px);\
	}\
	.left {\
		transform: rotateY(90deg) rotateZ(-90deg) translateZ(50px);\
	}\
	.right {\
		transform: rotateY(90deg) rotateZ(-90deg) translateZ(-50px);\
	}\
	.top {\
		transform: translateZ(50px);\
	}\
	.bottom {\
		transform: translateZ(-50px);\
	}';

	var cubeTexture = '\
	.front, .back,\
	.left, .right,\
	.top, .bottom {\
		background-image: url("images/texture.png");\
		background-position: 200px 0;\
	}\
	.front {\
		background-position: 300px 0;\
	}\
	.top, .bottom {\
		background-position: 100px 0;\
	}';

	$scope.ex = [
		 { // ex0
		css: '.rect{background-color:red;width:100px;height:100px;transition:transform 1s;transform: translateX(50px);}',
		code: '<div class="rect"></div>'
	}, { // ex1
		css: '.rect{background-color:red;width:100px;height:100px;transition:transform 1s;transform: rotateY(60deg);}',
		code: '<div class="rect"></div>'
	}, { // ex2
		css: '.rect{position:absolute;width:100px;height:100px;transition:transform 1s;}.r1{background-color:red;transform: rotateY(30deg);}.r2{background-color:green;transform: rotateY(120deg);}',
		code: '<div class="rect r1"></div><div class="rect r2"></div>'
	}, { // ex3
		css: '.rect{transform-style:preserve-3d;position:absolute;width:100px;height:100px;transition:transform 1s;}.r1{background-color:red;transform: rotateY(30deg);}.r2{background-color:green;transform: rotateY(90deg);}',
		code: '<div class="rect r1"><div class="rect r2"></div></div>'
	}, { // ex4
		css: '.rect{transform-style:flat;position:absolute;width:100px;height:100px;transition:transform 1s;}.r1{background-color:red;transform: rotateY(30deg);}.r2{background-color:green;transform: rotateY(90deg);}',
		code: '<div class="rect r1"><div class="rect r2"></div></div>'
	}, { // ex5
		css: '#container{perspective:0px;}.rect{transform-style:preserve-3d;position:absolute;width:100px;height:100px;transition:transform 1s;}.r1{background-color:red;transform: rotateY(30deg);}.r2{background-color:green;transform: rotateY(90deg);}',
		code: '<div class="rect r1"><div class="rect r2"></div></div>'
	}, { // ex6
		css: cubeCss  + '\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}',
		code: cubeDom
	}, { // ex7
		css: cubeCss + '\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}' + cubeTexture,
		code: cubeDom
	}, { // ex8
		css: cubeCss + '\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}' + cubeTexture + '\
.ground:before {\
	content: "";\
	position: absolute;\
	width: 100px;\
	height: 100px;\
	top: 50px;\
	left: 50px;\
	background-color: black;\
	box-shadow: -5px -5px 20px 5px black;\
}\
		',
		code: cubeDom
	}, { // ex9
		css: cubeCss + '\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}' + cubeTexture + '\
.animate {\
	-webkit-animation: yaxis 2s ease-in-out 0s infinite alternate;\
}\
@-webkit-keyframes yaxis {\
	0% {\
		transform: translateZ(0px);\
	}\
	100% {\
		transform: translateZ(50px);\
	}\
}\
		',
		code: cubeDom2
	}, { // ex10
		css: cubeCss + '\
.cube {\
	transform: translateX(100px) translateZ(51px);\
}' + cubeTexture + '\
.animate {\
	-webkit-animation: yaxis 2s linear 0s infinite;\
	transform-origin: center 100px;\
}\
@-webkit-keyframes yaxis {\
	0% {\
		transform: rotateZ(0deg);\
	}\
	100% {\
		transform: rotateZ(360deg);\
	}\
}\
		',
		code: cubeDom2
	}, { // ex11
		css: cubeCss + '\
.cube {\
	transform: translateX(50px) translateY(50px) translateZ(51px);\
}' + cubeTexture + '\
.animate1 {\
	-webkit-animation: xaxis 2s ease-in-out 0s infinite alternate;\
}\
.animate2 {\
	-webkit-animation: zaxis 2s ease-in-out 1s infinite alternate;\
}\
@-webkit-keyframes xaxis {\
	0% {\
		transform: translateX(0px);\
	}\
	100% {\
		transform: translateX(100px);\
	}\
}\
@-webkit-keyframes zaxis {\
	0% {\
		transform: translateY(0px);\
	}\
	100% {\
		transform: translateY(100px);\
	}\
}\
		',
		code: cubeDom3
	}, { // ex12
		css: 'div{color:red;}',
		code: '<div>ex12</div>'
	}, { // ex13
		css: 'div{color:red;}',
		code: '<div>ex13</div>'
	}];
}]);

App.directive('liveEditor', [ function() {

	var template = '\
		<div class="cssEditor">\
			<textarea ui-codemirror="cssEditor" ng-model="cssContent"></textarea>\
		</div>\
		<div class="codeEditor">\
			<textarea ng-model="codeContent"></textarea>\
		</div>\
		<div class="preview">\
			<iframe src="frame.html"></iframe>\
		</div>\
		';

	var link = function ($scope, element) {

		var frame = jQuery(element).find('iframe');
		var styler, scene;

		frame.on('load', function() {
			styler = jQuery(this).contents().find('#styler');
			scene = jQuery(this).contents().find('#scene');

			var c = 'css_beautify', h = 'html_beautify';

			$scope.cssContent = window[c]($scope.css);
			$scope.codeContent = window[h]($scope.code);

			$scope.$digest();

			styler.html($scope.cssContent);
			scene.html($scope.codeContent);

			setTimeout(function(){
				window.jQuery(element).find('.cssEditor textarea').each(function() {
						CodeMirror.fromTextArea(this, {
							lineNumbers: true,
							extraKeys: {'Ctrl-Space': 'autocomplete'},
							mode: 'css'
						}).on('change', function(cm) {
							styler.html(cm.getValue());
						});
				});
				window.jQuery(element).find('.codeEditor textarea').each(function() {
						CodeMirror.fromTextArea(this, {
							lineNumbers: true,
							extraKeys: {'Ctrl-Space': 'autocomplete'}
						}).on('change', function(cm) {
							scene.html(cm.getValue());
						});
				});
			}, 1000);

		});
/*
		$scope.$watch('cssContent', function(val){
			if (styler) {
				styler.html(val);
			}
		});

		$scope.$watch('codeContent', function(val){
			if (scene) {
				scene.html(val);
			}
		});
*/
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