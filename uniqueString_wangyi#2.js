/**
 * 字符串重排问题：将字符串重新排列，保证其中不同字母最多只能相邻一次
 * 例如，“ABAB”，，，只有"AABB"、"BBAA"满足条件
 */

/**
 * 分析思路：
 * 若字符串中有超过2种以上不同字符，如"ABC"，无论如何排列，无法满足条件，只有0种
 *             有2种不同字符，如"AB",在其两边排列相同字母，有2种
 *             只有1种字符，如"A",只有1种
 */

//input:一行字符串
//output:满足条件的种数
var readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.on('line', function(line){
	var arr = line.split('');
	//计算字符串中不同字符种类，即数组去重
	console.log(arr);
	var unique = uniqueArray(arr);
	if(unique.length === 1){
		console.log(1);
	}else if(unique.length === 2){
		console.log(2);
	}else{
		console.log(0);
	}
});

/**
 * [数组去重，计算其中不同字符种类]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function uniqueArray(arr){
	var unique = [];
	var hashmap = {};
	for(var i = 0; i < arr.length; i++){
		if(!hashmap.hasOwnProperty(arr[i])){
			hashmap[arr[i]] = 1;   //使用方括号表示法，使用变量访问属性
			unique.push(arr[i]);
		}
	}
	return unique;
}