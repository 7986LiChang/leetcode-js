/**
 * 冒泡排序bubbleSort: 
 * 1、外层循环移动游标i
 * 2、内层循环  正序（从开始 到 结束-i 的位置）
 * 3、内层循环 前后元素 两两比较，前后交换，让较大元素向后冒泡
 */

/*
设置标志位
 */


var bubbleSort = function(array) {
	for (var i = 0; i < array.length; i++) {
		var isSwap = false;
		for (var j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				// 前后交换
				isSwap = true;
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
		// if (!isSwap) {
			// return arr;
		// }
	}
	return arr;
};

var arr = [8, 24, 61, 45, 17, 31, 96, 50];
console.log(bubbleSort(arr));