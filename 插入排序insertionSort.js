/**
 * 插入排序：模拟打扑克的过程
 * 记录当前元素，在前序元素中比较大小，通过移动位置，为当前元素找到应插入位置
 */

var insertionSort = function(arr){
	var len = arr.length;
	var cur,preIndex;
	for( var i = 1; i < len; i++){
		preIndex = i - 1;
		cur = arr[i];
		while( preIndex >= 0 && arr[preIndex] > cur){
			arr[preIndex + 1] = arr[preIndex];  //大于当前元素，则后移
			preIndex-- ;    //向前移动preIndex游标
		}
		//前面元素遍历结束，找到cur所在位置
		arr[preIndex + 1] = cur;
		// for( var j = preIndex; j >= 0; j-- ){
		// 	if(arr[j] > cur){
		// 		arr[j + 1] = arr[j];

		// 	}
		// 	else{
		// 		arr[j + 1] = cur;
		// 	}
		// }
	}
	return arr;
};

var arr = [8, 24, 61, 45, 17, 31, 96, 50];
console.log(insertionSort(arr));