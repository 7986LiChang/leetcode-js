/**
 * [有序的二分查找，返回-1或存在的数组下标]
 * @param {[type]} target [description]
 * @param {[type]} arr    [description]
 */
function binarySearch(target, arr){
	var low = 0,
	    high = arr.lenght
	    mid;

	while(low <= high){
		mid = parseInt((low + high) / 2);
		if(target > arr[mid]) low = mid + 1;
		else if(target < arr[mid]) high = mid - 1;
		else return mid;
	}
	return -1;
}


/**
 * [有序的二分查找，递归实现]
 * @param  {[type]} target [description]
 * @param  {[type]} arr    [description]
 * @param  {[type]} start  [description]
 * @param  {[type]} end    [description]
 * @return {[type]}        [description]
 */
function binarySearch(target, arr, start, end){
	var start = start || 0;
	var end = end || arr.length - 1;

	var mid = parseInt((start + end) / 2);
	//递归终止条件
	if(target == arr[mid]){
		return mid;
	}
	else if(target < arr[mid]){
		return binarySearch(target, arr, start, mid - 1);
	}else if(target > arr[mid]){
		return binarySearch(target, arr, mid + 1, end);
	}

	return -1;
}

/**
 * [无序的二分查找，直接返回true/false]
 * @param  {[type]} target [description]
 * @param  {[type]} arr    [description]
 * @return {[boolean]}        [description]
 */
function binarySearch(target, arr){
	if(arr.length > 0){
		//先用快排序分组，再二分
		var pivot = arr[0], //选取第一个元素为基准
			left = [], 
			right = [];

		//从第二个元素开始遍历
		for(var i = 1; i < arr.length; i++){
			var item = arr[i];
			item > pivot ? right.push(item) : left.push(item);
		}

		//基本排序后
		if(target == pivot){
			return true;
		}else if(target > pivot){
			return binarySearch(target, right);
		}else{
			return binarySearch(target, left);
		}
	}

	return false;
}

