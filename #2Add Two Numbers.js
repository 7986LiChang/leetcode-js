/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //声明返回链表的头结点
    var addListNodeHead = new ListNode(0);
    var p = l1, q = l2, curNode = addListNodeHead;
    var carry = 0;
    
    while(p != null || q != null){
        var x = (p != null) ? p.val : 0;
        var y = (q != null) ? q.val : 0;
        
        var sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curNode.next = new ListNode(sum % 10);
        curNode = curNode.next;
        
        if(p != null) p = p.next;
        if(q != null) q = q.next;
    }
    
    if(carry > 0){
        curNode.next = new ListNode(carry);
    }
    return addListNodeHead.next;
};