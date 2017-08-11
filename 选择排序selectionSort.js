/**
 * 选择排序：
 * 1、遍历数组，从头至尾，根据索引位置，找对应大小的数填入
 * 因此叫选择排序，比较选择出相应位置最小的那个数
 */

var selectionSort = function (arr){
	var len = arr.length;
	var minIndex,temp;
	for( var i = 0; i < len - 1; i++ ){
		minIndex = i;
		for( var j = i + 1; j < len; j++ ){
			if(arr[j] < arr[minIndex]){   
				minIndex = j;   //记录最小的索引值
			}
		}

		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
};

var arr = [8, 24, 61, 45, 17, 31, 96, 50];
console.log(selectionSort(arr));