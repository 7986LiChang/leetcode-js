process.stdin.resume();
process.stdin.setEncoding("ascii");
 
var input = "";
var input_array = "";
 
process.stdin.on("data", function(data){
    input += data;
});
 
// process.stdin.on("end", function(){
process.on("SIGINT", function(){    
    input_array = input.split("\n");  //按换行符分割
     
    var tnum = parseInt(input_array[0]);    //第一行输入为数据组数
    // console.log("tnum:" + tnum);
    //二维数组，存储输入的多组数据[ [ [3,1],[1,2,3,4,5,6] ], [[3,2],[1,2,3,4,5,6]] ]
    var tipnumArray = [];
    for(var i = 0; i < tnum; i++){
        var tipnum = [];
        tipnum.push(input_array[i * 2 + 1].split(" "));
        tipnum.push(input_array[i * 2 + 2].split(" "));
        tipnumArray.push(tipnum);
    }
    // //循环操作3组数据
    for(var i = 0; i < tnum; i++){
        var n = tipnumArray[i][0][0];
        var k = tipnumArray[i][0][1];
        var arr = tipnumArray[i][1];
        //洗牌k次
        while(k > 1){
            arr = resort(n, arr);
            k--;
        }
        //只洗牌一次
        console.log(resort(n, arr).join(" ")); //转换为字符串输出
    }
    process.exit(0);
});
 
//arr数组，长度为2n  [1,2,3,4,5,6]
function resort(n, arr){
    var left = arr.slice(0, n);
    var right = arr.slice(n);
    var resort = [];
    for(var i = right.length - 1, j = left.length - 1; i >= 0 && j >= 0; j--, i--){
        resort.push(right[i]);
        resort.push(left[j]);
    }
    resort = resort.reverse();
    return resort;
}
