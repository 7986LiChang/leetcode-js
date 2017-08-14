// 数组去重

// 给定某无序数组，要求去除数组中的重复数字并且返回新的无重复数组

// 思路一：
// 利用ES6新提出的Set结构
// 1、接收数组作为参数，新建Set结构，创建不重复的值  new Set(array)
// 2、将Set结构转换为数组，Array.from()从类似数组或可迭代的对象中返回一个数组
function uniqueArray(array){
	return Array.from(new Set(array));
}
var array = [1,2,3,5,1,5,9,1,2,2,5,8];
uniqueArray(array);

// 思路二：
// 1、新建一个保存不重复值的数组，最后返回
// 2、遍历原始数组，用一个标志看当前值是否已存在，利用第三方对象（  键：值 对  ）
// 3、没有的话，将值存入新数组

function uniqueArray(array){
	var unique_array = [];
	var object_array = {};

	for( var i = 0; i < array.length; i++ ){
		if(!object_array.hasOwnProperty( array[i] )){    //在对象属性中能否找到当前属性，有表示重复，没有就加入新数组中
			object_array[ array[i] ] = 1;   //在object_array对象中 当前数字为属性（键）的值
			unique_array.push(array[i]);
		}
	}
	return unique_array;
}

// 思路三：
// 1、数组中的元素两两比较，如果值相同，就删除，splice(index,length)返回的是被删除项构成的数组
// 2、最后再返回原数组
function uniqueArray(array){
	for( var i = 0; i < array.length; i++){
		for( var j = i + 1 ; j < array.length; j++ ){
			if( array[i] == array[j]){
				array.splice(j, 1);
			}
		}
	}
	return array;
}