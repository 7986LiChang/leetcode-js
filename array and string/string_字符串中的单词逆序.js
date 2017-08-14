颠倒字符串，要求将字符串中的单词倒转后输出

// 1、将字符串按一定分隔符切割为数组，string.split(separator)
// 2、利用数组的逆序方法反转数组中元素的顺序 array.reverse()
// 3、将数组按一定分隔符连接为字符串，array.join(separator)

var string = "Welcome to this Javascript Guide!";
reverseString(string);

function reverseString(string){
	// 每个字符存进数组逆序，输出"!ediuG tpircsavaJ siht ot emocleW"
	var reverseEntireSentence = reverseBySeparator(string, "");

	// 单词存入数组逆序(" "空格分割)，输出"emocleW ot siht tpircsavaJ !ediuG"
	var reverseWord = reverseBySeparator(reverseEntireSentence, " ");
	return reverseWord;
}

function reverseBySeparator(string, separator){
	return string.split(separator).reverse().join(separator);
}
