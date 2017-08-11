/**
 * 快速排序
 * 1、选定基准元素pivot
 * 2、遍历数组剩下元素，比pivot小的放左边，比pivot大的放右边
 * 3、在左、右子集中递归上两步
 */

//使用函数表达式
var quickSort = function(array){
	// 子集中只包含一个元素时，结束返回数组
	if(array.length <= 1){
		return array;
	}
	var pivotIndex = Math.floor(array.length / 2);
	var pivot = array.splice(pivotIndex, 1)[0];

	var left = [];
	var right = [];

	for(var i = 0; i < array.length; i++){
		if(array[i] < pivot){
			left.push(array[i]);
		}
		else{
			right.push(array[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(right));
};

var arr = [85,24,61,45,17,31,96,50];
console.log(quickSort(arr));