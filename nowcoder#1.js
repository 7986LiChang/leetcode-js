/*
   在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/*
思路一：二维有序数组，想象成有序矩阵，找定一个比较基准，最好能减少分支
   选定左下角为基准元素，大于它，往右找，小于它，往上找
 */


/**
 * [Find 在有序矩阵中查找元素]
 * @param {[type]} target [description]
 * @param {[type]} array  [description]
 */
function Find(target, array)
{
    // write code here
    var lenrow = array.length,   //行数
        lencol = array[0].length,    //列树
    
    for(var i = lenrow -1, j = 0; i >= 0 && j < lencol; ){
        if(target === array[i][j]){
            return true;
        }
        else if(target < array[i][j]){
            i--;
            continue;
        }else{
            j++;
            continue;
        }
    }
    
    return false;
}

/*
 * 思路二：按行遍历，利用二分查找
 * 特别注意：在js中使用/时，由于是弱类型，不存在int/float等，全都是Number类型
 * 极有可能出现使用除法 / 得到小数的情况
 */
 function Find(target, array)
{
    // write code here
    var low, high, mid;
        
    for(var i = 0; i < array.length; i++){
        //利用二分查找
        low = 0;
        high = array[i].length - 1;
        while(low <= high){
            mid = parseInt((low + high) / 2);
            if(target < array[i][mid]) high = mid - 1;
            else if(target > array[i][mid]) low = mid + 1;
            else return true;
        }
    }
    return false;
}