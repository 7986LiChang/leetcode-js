/**
 * 使用readline模块实现Node.js的输入输出
 * 1、'line'事件：用户输入完一行，按下回车后就会触发，会将用户输入的数据通过回调函数传回。
 *    可以在其中处理用户输入的数据
 * 2、rl.question('query', function(answer){}) 交互式问题
 */

/**
 * [读取一行输入，按逗号/空格分开]
 * @type {[type]}
 */
// var readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// rl.on("line", function(line){
// 	var tokens = line.split(",");
// 	console.log("You input :" + 
// 		parseInt(tokens[0]) + ", " + parseInt(tokens[1]));

// 	//add code here
// });


/**
 * 给定输入行数，如：输入2行数据，并输出
 */
// var readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });
// var countLine = 1;
// var tokens = [];

// rl.on('line', function(line){
// 	tokens.push(line);

// 	if(countLine === 2){
// 		console.log("第一行输入" + tokens[0] + "第二行输入" + tokens[1]);
// 		console.log(tokens[1].split(" "));
// 		//add code here

// 		countLine = 1;
// 		tokens = [];
// 	}
// 	else{
// 		countLine++;
// 	}
// });

/**
 * 读取多行输入
 */
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var input_array = "";

process.stdin.on("data", function(data){
	input += data;
});

// process.stdin.on("end", function(){
// 	input_array = input.split("\n");
// 	console.log("多行输入：" + input_array);
// 	//add code here

// });

//在本地终端使用，要修改end事件。使用ctrl+c得到输出
process.on('SIGINT', function(){
	input_array = input.split("\n");
	console.log("第1行:" + input_array[0].split(" ") +　"第2行" + input_array[1].split(" ") + "第3行:" + input_array[2].split(" "));
	console.log(input_array);
	process.exit(0);
});

/**
 * example
 */
// var readline = require('readline');

// var rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// //设置类似real编辑器的">"提示
// rl.setPrompt('Input>');
// rl.prompt();

// rl.question('你是2B吗？', function(answer){
// 	switch(answer){
// 		case 'no':
// 			console.log('no no no,显然你就是！hahahahah');
// 			break;
// 		case 'yes':
// 			console.log('good bye,2b!');
// 			rl.close();
// 			break;
// 		default:
// 			console.log('只能回答yes / no!');
// 			break;
// 	}
// });


/**
 * 牛客网上：
 */
/**
 * 输入一行，空格分开
 */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var input_arrays = line.split(' ');
        var a = +input_arrays[0];
        var b = +input_arrays[1];
        console.log(a+b);
    }
});


/**
 * [输入方阵，输出一个值为全部的和]
 * @type {[type]}
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       n = parseInt(line.trim());
   } else {
       // 矩阵数据读取
          var tokens = line.split(' ');
       for (var i = 0; i < tokens.length; ++i) {
           // 题目逻辑求和，边读取边计算
           ans += parseInt(tokens[i]);
       }
       // 记录当前读取的行数
       cur_line += 1;
   }
    
   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (n === cur_line) {
       // 输出结果
       console.log(ans);
       // 重新初始化相关变量
       n = -1;
       ans = 0;
       cur_line = 0;
   }
});