// 回文字符串
// 判断某个字符串是否是回文字符串，例如racecar 和 race car都是回文字符串

// 1、字符串小写化，并去空格，将空格替换为无"",string.replace(reg,"replaceValue")
// 2、转换为数组逆序,并再拼接为字符串 string.split("").reverse().join("")
// 3、若是回文，逆序也应该完全相同

function isPalindrome(string){
	var lettersOnly = string.toLowerCase().replace(/\s/g, "");
	return lettersOnly === lettersOnly.split("").reverse().join("");

isPalindrome("racecar");


// 根据值删除数组中的项

// 给js的数组对象定义一个函数indexOf，用于返回指定元素在数组中的索引
Array.prototype.remove = function(val){
	var val_index = this.indexOf(val);    //this指向当前数组对象
	if(val_index > -1){
		this.splice(val_index, 1);
	}
};



