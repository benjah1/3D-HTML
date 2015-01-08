var App = angular.module('ppt', [function(){
	window.impress().init();
}]);

App.controller('impress', ['$scope', function($scope) {
	console.log($scope);
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
		css: '\
.obj {\
position:absolute;\
width:0;\
height:0;\
transform-style:preserve-3d;\
}\
.ground {\
width: 200px;\
height: 200px;\
top: -100px;\
left: -100px;\
background-color: #ccc;\
transform: rotateX(80deg) translateZ(-80px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
width:100px;\
height:100px;\
content:"";\
position:absolute;\
left: -50px;\
top: -50px;\
opacity:.8;\
}\
.x:before, .x:after {\
	background-color: red;\
}\
.y:before, .y:after {\
	background-color: green;\
}\
.z:before, .z:after {\
	background-color: blue;\
}\
.x:before, .y:before, .z:before {\
	transform: translateZ(50px);\
}\
.x:after, .y:after, .z:after {\
	transform: translateZ(-50px);\
}\
.x {\
	transform: rotateX(-90deg);\
}\
.y {\
	transform: rotateY(90deg) rotateZ(-90deg);\
}\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}\
		',
		code: '<div class="ground obj"><div class="cube obj"><div class="z obj"></div><div class="x obj"></div><div class="y obj"></div></div></div>'
	}, { // ex7
		css: '\
.obj {\
position:absolute;\
width:0;\
height:0;\
transform-style:preserve-3d;\
}\
.ground {\
width: 200px;\
height: 200px;\
top: -100px;\
left: -100px;\
background-color: #ccc;\
transform: rotateX(80deg) translateZ(-80px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
	width:100px;\
	height:100px;\
	content:"";\
	position:absolute;\
	left: -50px;\
	top: -50px;\
}\
.x:before, .x:after {\
	background-color: red;\
}\
.y:before, .y:after {\
	background-color: green;\
}\
.z:before, .z:after {\
	background-color: blue;\
	background-position: 100px 0;\
}\
.x:before, .y:before, .z:before {\
	transform: translateZ(50px);\
}\
.x:after, .y:after, .z:after {\
	transform: translateZ(-50px);\
}\
.x {\
	transform: rotateX(-90deg);\
}\
.y {\
	transform: rotateY(90deg) rotateZ(-90deg);\
}\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
	background-image: url("images/texture.png");\
	background-position: 200px 0;\
}\
.x:before {\
	background-position: 300px 0;\
}\
.z:before, .z:after {\
	background-position: 100px 0;\
}\
		',
		code: '<div class="ground obj"><div class="cube obj"><div class="z obj"></div><div class="x obj"></div><div class="y obj"></div></div></div>'
	}, { // ex8
		css: '\
.obj {\
position:absolute;\
width:0;\
height:0;\
transform-style:preserve-3d;\
}\
.ground {\
width: 200px;\
height: 200px;\
top: -100px;\
left: -100px;\
background-color: #ccc;\
transform: rotateX(80deg) translateZ(-80px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
width:100px;\
height:100px;\
content:"";\
position:absolute;\
left: -50px;\
top: -50px;\
}\
.x:before, .x:after {\
	background-color: red;\
}\
.y:before, .y:after {\
	background-color: green;\
}\
.z:before, .z:after {\
	background-color: blue;\
}\
.x:before, .y:before, .z:before {\
	transform: translateZ(50px);\
}\
.x:after, .y:after, .z:after {\
	transform: translateZ(-50px);\
}\
.x {\
	transform: rotateX(-90deg);\
}\
.y {\
	transform: rotateY(90deg) rotateZ(-90deg);\
}\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
	background-image: url("images/texture.png");\
	background-position: 200px 0;\
}\
.x:before {\
	background-position: 300px 0;\
}\
.z:before, .z:after {\
	background-position: 100px 0;\
}\
.x:after, .y:after, .z:after {\
	background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("images/texture.png");  \
}\
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
		code: '<div class="ground obj"><div class="cube obj"><div class="z obj"></div><div class="x obj"></div><div class="y obj"></div></div></div>'
	}, { // ex9
		css: '\
.obj {\
position:absolute;\
width:0;\
height:0;\
transform-style:preserve-3d;\
}\
.ground {\
width: 200px;\
height: 200px;\
top: -100px;\
left: -100px;\
background-color: #ccc;\
transform: rotateX(80deg) translateZ(-80px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
width:100px;\
height:100px;\
content:"";\
position:absolute;\
left: -50px;\
top: -50px;\
}\
.x:before, .x:after {\
	background-color: red;\
}\
.y:before, .y:after {\
	background-color: green;\
}\
.z:before, .z:after {\
	background-color: blue;\
}\
.x:before, .y:before, .z:before {\
	transform: translateZ(50px);\
}\
.x:after, .y:after, .z:after {\
	transform: translateZ(-50px);\
}\
.x {\
	transform: rotateX(-90deg);\
}\
.y {\
	transform: rotateY(90deg) rotateZ(-90deg);\
}\
.cube {\
	transform: translateX(100px) translateY(100px) translateZ(51px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
	background-image: url("images/texture.png");\
	background-position: 200px 0;\
}\
.x:before {\
	background-position: 300px 0;\
}\
.z:before, .z:after {\
	background-position: 100px 0;\
}\
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
		code: '<div class="ground obj"><div class="cube obj"><div class="animate obj"><div class="z obj"></div><div class="x obj"></div><div class="y obj"></div></div></div></div>'
	}, { // ex10
		css: '\
.obj {\
position:absolute;\
width:0;\
height:0;\
transform-style:preserve-3d;\
}\
.ground {\
width: 200px;\
height: 200px;\
top: -100px;\
left: -100px;\
background-color: #ccc;\
transform: rotateX(80deg) translateZ(-80px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
width:100px;\
height:100px;\
content:"";\
position:absolute;\
left: -50px;\
top: -50px;\
}\
.x:before, .x:after {\
	background-color: red;\
}\
.y:before, .y:after {\
	background-color: green;\
}\
.z:before, .z:after {\
	background-color: blue;\
}\
.x:before, .y:before, .z:before {\
	transform: translateZ(50px);\
}\
.x:after, .y:after, .z:after {\
	transform: translateZ(-50px);\
}\
.x {\
	transform: rotateX(-90deg);\
}\
.y {\
	transform: rotateY(90deg) rotateZ(-90deg);\
}\
.cube {\
	transform: translateX(100px) translateZ(51px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
	background-image: url("images/texture.png");\
	background-position: 200px 0;\
}\
.x:before {\
	background-position: 300px 0;\
}\
.z:before, .z:after {\
	background-position: 100px 0;\
}\
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
		code: '<div class="ground obj"><div class="cube obj"><div class="animate obj"><div class="z obj"></div><div class="x obj"></div><div class="y obj"></div></div></div></div>'
	}, { // ex11
		css: '\
.obj {\
position:absolute;\
width:0;\
height:0;\
transform-style:preserve-3d;\
}\
.ground {\
width: 200px;\
height: 200px;\
top: -100px;\
left: -100px;\
background-color: #ccc;\
transform: rotateX(80deg) translateZ(-80px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
width:100px;\
height:100px;\
content:"";\
position:absolute;\
left: -50px;\
top: -50px;\
}\
.x:before, .x:after {\
	background-color: red;\
}\
.y:before, .y:after {\
	background-color: green;\
}\
.z:before, .z:after {\
	background-color: blue;\
}\
.x:before, .y:before, .z:before {\
	transform: translateZ(50px);\
}\
.x:after, .y:after, .z:after {\
	transform: translateZ(-50px);\
}\
.x {\
	transform: rotateX(-90deg);\
}\
.y {\
	transform: rotateY(90deg) rotateZ(-90deg);\
}\
.cube {\
	transform: translateX(50px) translateY(50px) translateZ(51px);\
}\
.x:before, .x:after,\
.y:before, .y:after,\
.z:before, .z:after {\
	background-image: url("images/texture.png");\
	background-position: 200px 0;\
}\
.x:before {\
	background-position: 300px 0;\
}\
.z:before, .z:after {\
	background-position: 100px 0;\
}\
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
		code: '<div class="ground obj"><div class="cube obj"><div class="animate1 obj"><div class="animate2 obj"><div class="z obj"></div><div class="x obj"></div><div class="y obj"></div></div></div></div></div>'
	}, { // ex12
		css: 'div{color:red;}',
		code: '<div>ex12</div>'
	}, { // ex13
		css: 'div{color:red;}',
		code: '<div>ex13</div>'
	}]
}]);

App.directive('liveEditor', [ function() {


	var template = '\
		<div class="cssEditor">\
			<textarea ng-model="cssEditor"></textarea>\
		</div>\
		<div class="codeEditor">\
			<textarea ng-model="codeEditor"></textarea>\
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

			$scope.cssEditor = $scope.css;
			$scope.codeEditor = $scope.code;

			$scope.$digest();
		});

		$scope.$watch('cssEditor', function(val){
			if (styler) {
				styler.html(val);
			}
		});

		$scope.$watch('codeEditor', function(val){
			if (scene) {
				scene.html(val);
			}
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