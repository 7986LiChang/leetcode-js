// 乱序同字母字符串
// 给定两个字符串，判断是否颠倒字母而成的字符串，譬如Mary与Army就是同字母而顺序颠倒

// 思路一：
// 1、都转为小写字母
// 2、字符串存入数组 split("")
// 3、两个数组长度一致的情况下
// 4、遍历第一个数组，其中的每个值都应该能在第二个数组中找到

// 思路二：
// 1、都转为小写字母
// 2、字符串存入数组，string.split("")
// 3、数组按字符顺序排序 array.sort()
// 4、排序后的数组连接为字符串 array.join()
// 5、经过处理两个字符串应该完全相同 ===

function isAnagram( firstword, secondword ){
	var firstword_array = firstword.toLowerCase().split("");
	var secondword_array = secondword.toLowerCase().split("");
	if( firstword_array.length == secondword_array.length ){
		for( var i = 0 ; i < firstword_array.length ; i++ ){
			if( secondword_array.indexOf(firstword_array[i]) < 0 ){
				return false;
			}
		}
		return true;

	}
	else{
		return false;
	}
}

function isAnagram(firstword, secondword){
	// 转为小写
	var a = firstword.toLowerCase();
	var b = secondword.toLowerCase();
	// split-sort-join-compare
	a = a.split("").sort().join("");
	b = b.split("").sort().join("");
	return a === b;
}

var firstword = "Mary";
var secondword = "Army";
isAnagram(firstword, secondword);


