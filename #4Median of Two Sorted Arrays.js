/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var median;
    //合并排序数组
    var sortarr = nums1.concat(nums2).sort(function(a, b){
        return a-b;
    });
    //若合并长度为偶数，即0、1、2、3，中位数为中间两个数的和/2
    if(sortarr.length % 2 === 0){
        median = (sortarr[sortarr.length / 2] + sortarr[sortarr.length / 2 - 1]) / 2;
    }
    //若为奇数，即中间数
    else{
        median = sortarr[(sortarr.length - 1) / 2];
    }
    return median;
};
