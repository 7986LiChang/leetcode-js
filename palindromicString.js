/**
 * 多行输入
 */
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var input_array = "";

process.stdin.on("data", function(data){
    input += data;
});

process.stdin.on("end", function(){
    input_array = input.split("\n");
    // console.log("多行输入：" + input_array);
    var n = parseInt(input_array[0]);
    var arr = input_array[1].split(" ").map(function(item, index, array){
        return Number(item);
    }, this);

    var count = 0;
    var start = 0;
    var end = arr.length - 1;

        while(start <= end && arr[start] === arr[end]){
            start++;
            end--;
        }

        //获取非回文子串
        var rest = arr.splice(start, end - start + 1);
        start = 0;
        end = rest.length - 1;

        while(start < end && rest.length >= 2){
            if(rest[start] < rest[end]){
                //首部数字较小则合并首部 shift()弹出首部，unshift()在首部插入
                var temp = rest.shift() + rest.shift();
                rest.unshift(temp);
                count++;
            }else if(rest[start] > rest[end]){
                //尾部数字较小则合并尾部，pop()弹出尾部，push()在尾部插入
                var temp = rest.pop() + rest.pop();
                rest.push(temp);
                count++;
            }else{ //首尾相等的情况
                end--;
            }
        }
        console.log(count);
});

/*
 *两行输入
 */
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var countLine = 1,
    tokens = [],
    count = 0,
    n,
    arr;

rl.on('line', function(line){
    tokens.push(line);
    if(countLine == 2){
        n = tokens[0];
        arr = tokens[1].split(" ").map(function(item, index, array){
            //获取输入的数组
            return Number(item);
        },this);
       
        //do the code
        var start = 0;
        var end = arr.length - 1;

        while(start <= end && arr[start] === arr[end]){
            start++;
            end--;
        }

        //获取非回文子串
        var rest = arr.splice(start, end - start + 1);
        start = 0;
        end = rest.length - 1;

        while(start < end && rest.length >= 2){
            if(rest[start] < rest[end]){
                //首部数字较小则合并首部 shift()弹出首部，unshift()在首部插入
                var temp = rest.shift() + rest.shift();
                rest.unshift(temp);
                count++;
            }else if(rest[start] > rest[end]){
                //尾部数字较小则合并尾部，pop()弹出尾部，push()在尾部插入
                var temp = rest.pop() + rest.pop();
                rest.push(temp);
                count++;
            }else{ //首尾相等的情况
                start++;
                end--;
            }
        }
        console.log(count);

        countLine = 1;
        tokens = [];
    }
    else{
        countLine++;
    }
});


// function palindromicString(n, arr){
//     var start = 0;
//     var end = arr.length - 1;
//     var count = 0;

//     while(start <= end && arr[start] === arr[end]){
//         start++;
//         end--;
//     }

//     //获取非回文子串
//     var rest = arr.splice(start, end - start + 1);
//     start = 0;   //start始终指向rest头部
//     end = rest.length - 1;   //end指向rest末尾

//     while(start < end && rest.length >= 2){
//         if(rest[start] < rest[end]){
//             //首部数字较小则合并首部 shift()弹出首部，unshift()在首部插入
//             var temp = rest.shift() + rest.shift();
//             rest.unshift(temp);
//             count++;
//         }else if(rest[start] > rest[end]){
//             //尾部数字较小则合并尾部，pop()弹出尾部，push()在尾部插入
//             var temp = rest.pop() + rest.pop();
//             rest.push(temp);
//             count++;
//         }else{
//             //弹入移出操作后，end仍指向上一次rest末尾，找不到其值，将end前移
//             end--;
//         }
//     }
//     return count;
// }




