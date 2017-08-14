// 给数组原型添加方法：
// 能删除数组中的重复条目，并返回由重复项构成的数组

// 思路一：
// 1、声明供返回的数组
// 2、数组项两两比较，若值相同，splice()删除该项    
// （splice()返回的是 被删除项构成的数组）
// 3、将被删除的项存入新的数组返回

Array.prototype.distinct = function(){
	var unique_array = [];
	for( var i = 0; i < this.length; i++){
		for( var j = i + 1 ; j < this.length; j++ ){
			if( this[i] == this[j]){
				unique_array.push(this.splice( j, 1)[0]);
			}
		}
	}
	return unique_array;
};

// 去除数组重复项，并返回数组
Array.prototype.distinct = function(){
	var unique_array = [];
	for( var i = 0; i < this.length; i++){
		for( var j = i + 1 ; j < this.length; j++ ){
			if( this[i] == this[j]){
				this.splice( j, 1);
			}
		}
	}
	return this;
};
var string = " a   v  b  ";
string.split("").distinct();

