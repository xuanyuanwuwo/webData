'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Maigflter = function () {
	function Maigflter(newSmall, newMask, newBig) {
		_classCallCheck(this, Maigflter);

		this.small = newSmall;
		this.mask = newMask;
		this.big = newBig;
	}

	_createClass(Maigflter, [{
		key: 'mouseover',
		value: function mouseover() {
			var that = this;
			this.small.onmouseover = function () {
				that.mask.style.display = 'block';
				that.big.style.display = 'block';
			};
		}
	}, {
		key: 'mouseout',
		value: function mouseout() {
			var that = this;
			this.small.onmouseout = function () {
				that.mask.style.display = 'none';
				that.big.style.display = 'none';
			};
		}
	}, {
		key: 'mousemove',
		value: function mousemove() {
			var that = this;
			this.small.onmousemove = function (evt) {
				var e = evt || event;
				// 鼠标坐标是相对于页面，而mask坐标是相对于父元素定位，所以必须减去父元素相对页面的坐标，才是mask在页面的坐标
				var left = e.pageX - that.small.offsetLeft - that.mask.offsetWidth / 2;
				var top = e.pageY - that.small.offsetTop - that.mask.offsetHeight / 2;

				if (left < 0) {
					left = 0;
					console.log('hhh');
				}
				var maxLeft = that.small.offsetWidth - that.mask.offsetWidth;
				if (left > maxLeft) {
					left = maxLeft;
				}
				var maxTop = that.small.offsetHeight - that.mask.offsetHeight;
				if (top < 0) {
					top = 0;
				}
				if (top > maxTop) {
					top = maxTop;
				}
				that.mask.style.left = left + 'px';
				that.mask.style.top = top + 'px';
				// 比例尺
				// 小图片mask的图片：大图片big图片=小窗口mask宽高：大窗口big宽高
				// 算法
				// a/b=left/x （left是mask移动的距离，x是big的背景图移动距离）
				// that.mask.offsetWidth*x = that.big.offsetWidth*left
				var x = that.big.offsetWidth * left / that.mask.offsetWidth;
				var y = that.big.offsetHeight * top / that.mask.offsetHeight;

				that.big.style.backgroundPositionX = -x + 'px';
				that.big.style.backgroundPositionY = -y + 'px';
			};
		}
	}]);

	return Maigflter;
}();