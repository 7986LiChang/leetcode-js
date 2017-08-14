// 寻找连续数组的确实数

// 给定某无序数组，其包含了n个连续数组中的n-1个，已经上下边界，要求以O(n)的复杂度找出缺失的数字

// 思路一：
// 1、基于上下边界创建完整的连续数组
// 2、数组升序
// 2、循环遍历新创建数组数组，在缺失数组中找它的值，找不到的即返回

// 思路二：
// 1、已知上下边界，求得理论连续数组的和
// 2、求得当前数组的和
// 3、两者差值即为应该返回的缺失值

var array_unsorted = [2,5,1,4,9,6,3,7];
var upper_bound = 9;
var lower_bound = 1;

findMissingNumber(array_unsorted, upper_bound , lower_bound);


// 思路一：
function sortIntegers( a, b ){
	return a - b;
}

function findMissingNumber(array_unsorted , upper_bound , lower_bound){
	var array_sorted = array_unsorted.sort(sortIntegers);
	var array_all_sorted = new Array(upper_bound - lower_bound + 1);
	for(var i = 0; i < array_all_sorted.length; i++){
		array_all_sorted[i] = lower_bound;
		lower_bound++;
	}
	for(var j = 0; j < array_all_sorted.length; j++){
		if(array_sorted.indexOf(array_all_sorted[j]) < 0 ){
			return array_all_sorted[j];
		}
	}
}


// 思路二：
function sum_array(array_unsorted){
	var sum_array = 0;
	for(var i = 0; i < array_unsorted.length; i++){
		sum_array += array_sorted[i];
	}
	return sum_array;
}
function sum_upper_lower(upper_bound, lower_bound){
	return ( upper_bound * (upper_bound + 1) / 2 ) - ( lower_bound * (lower_bound + 1) / 2 );
}
function FindMissingNumber(array_unsorted, upper_bound, lower_bound){
	// 计算数组的和
	return sum_upper_lower(upper_bound, lower_bound) - sum_array(array_unsorted);
}