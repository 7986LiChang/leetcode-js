/**
 * 快速排序quickSort()
 *
 * 1、选择基准元素pivot
 * 2、遍历除基准元素外的数组，小于基准的移到左边，大于基准的移到右边
 * 3、对基准的左右子集，递归排序，直到子集只剩下一个元素
 */

//定义函数表达式
/**
 * [quickSort description]
 * @param  {[type]} arr [接收的数组]
 * @return {[type]}     [排序后的数组]
 */
var quickSort = function(arr){
	if(arr.length <= 1){
		return arr;
	}
	//定义基准元素pivot
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivot,1)[0];
	
	var left = [];
	var right = [];

	//经过arr.splice,  arr已经去除基准元素
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}
		else{
			right.push(arr[i]);
		}
	}
};