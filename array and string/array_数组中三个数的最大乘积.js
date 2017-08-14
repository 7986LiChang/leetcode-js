/*找出整型数组中乘积最大的三个数
给定一个包含整数的无序数组，要求找出乘积最大的三个数
*/

/*
1、将数组排序
2、乘积最大的情况：三个最大的数乘 || 两个最小的复数*最大的正数 
3、比较两个乘积，返回大的
*/

//有正有负
var unsorted_array = [-10, 7, 29, 30, 5, -10 , -70];
computeProduct( unsorted_array );

//传给sort()的参数
function sortIntegers( a, b ){
	return a - b;
}

function computeProduct( array ){
	var sorted_array = array.sort( sortIntegers );
	var product1 = 1;
	var product2 = 1;
	for( var i = sorted_array.length - 1 ; i >= sorted_array.length - 3 ; i-- ){
		product1 = product1 * sorted_array[i];
	}
	product2 = sorted_array[0] * sorted_array[1] * sorted_array[sorted_array.length - 1];
	if( product1 >= product2 ){
		return product1;
	}
	else{
		return product2;
	}
}
