'use strict';

window.jQuery(function($) {

	var height = $(document).height();
	var width = $(document).width();
	var currPos = {};

	Math.map = function (x, from1, to1, from2, to2) {
		return (from2 - to2) * (x - to1) / (from1 - to1) + to2;
	};

	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/\{(\d+)\}/g, function(match, number) { 
			return typeof args[number]!=='undefined'?args[number]:'';
		});
	};

	$.fn.transform = function(options){
		$(this).each(function(){
			var opt = $.extend({
				'rotate': {
					'x': 0,
					'y': 0,
					'z': 0
				},
				'scale': {
					'x': 1,
					'y': 1,
					'z': 1
				},
				'translate': {
					'x': 0,
					'y': 0,
					'z': 0
				}
			}, options),
			tmp = 'rotateX({0}) rotateY({1}) rotateZ({2}) scale3d({3},{4},{5}) translate3d({6},{7},{8})',
			style = tmp.format(
				opt.rotate.x,
				opt.rotate.y,
				opt.rotate.z,
				opt.scale.x,
				opt.scale.y,
				opt.scale.z,
				opt.translate.x,
				opt.translate.y,
				opt.translate.z
			);
			
			$(this).css('transform', style);
		});

		return this;
	};

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


	var	reset = throttle(function() {
		$('#scene').transform();
	}, 5000);

	$(document).on('mousemove', function(event) {

		currPos.x = event.pageX;
		currPos.y = event.pageY;

		var cx = Math.map(width/2 - currPos.x, width/2, -width/2, -60, 60);
		var cy = Math.map(2*height/3 - currPos.y, 2*height/3, -height/3, 60, -60);
		$('#scene').transform({
			'rotate': {
				x: Math.floor(cy) +'deg',
				y: Math.floor(cx) + 'deg',
				z: 0
			}
		});

		reset();

	});

});