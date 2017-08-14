// 填充代码。使mySort()能使传入的参数按从小到大的顺序显示

接收的参数没有在函数参数中表明，使用argument属性

function mySort(){
	var tags = new Array(); //使用数组存储参数
	// 用tags接收传入的参数
	tags = 	Array.prototype.slice.call(arguments);
	tags.sort( function(a, b){ return a - b;});
	return tags;
}