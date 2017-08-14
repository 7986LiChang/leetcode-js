/**
 * [网易笔试1: 水果题]
 * @type {[type]}
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    var tokens = line.split(' ');
    //接收进来的输入是字符串，首先将其转换处理为数字类型，否则在"+"时，导致拼接成为字符串
    var x = parseInt(tokens[0]),  //房租
        f = parseInt(tokens[1]),  //初始水果
        d = parseInt(tokens[2]),  //初始钱
        p = parseInt(tokens[3]);  //水果单价
    var day = 0;

    if(d <= f * x){
        //f个水果，应该可以存活f天，看房租是否满足
        //钱不够支撑f个水果，看钱能过几天
        day = parseInt(d / x);
    }else{
        //钱够支撑f个水果,花费f*x元
        d = d - (x * f);
        day = f + parseInt(d / (x + p));
    }

    console.log(day);
});