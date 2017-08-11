/*
 * 输入一个链表，从尾到头打印链表的每个节点的值
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    /*
     * 思路：遍历链表，值存入数组，数组逆序后输出
    */
    var p = head,
    	arr = [];
    while(p !== null){
        arr.push(p.val);
        p = p.next;
    }
    return arr.reverse();

}