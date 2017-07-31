/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
 * 思路一：找出字符排列规律，核心：注意边界处理，循环处理
 */
var convert = function(s, numRows) {
    var strarr = [];
    
    if(s !== ""){
        if(s.length < numRows){
            for(var i = 0; i < s.length; i++){
                strarr[i] = s[i]; 
            }
            return strarr.join("");
        }
        else{
            if(numRows === 1){
                for(var i = 0; i < s.length; i++){
                    strarr[i] = s[i];                 
                }
                return strarr.join("");
            }
            else{
                for(var i = 0; i < numRows; i++){
                    if(s[i] !== undefined){
                        strarr[i] = s[i];                 
                    }
                }
                var maxm = Math.floor(s.length / numRows); 
                for(var m = 1; m <= maxm; m++){
                    if(s[2 * ( numRows - 1) * m] !== undefined){
                        strarr[0] += s[2 * ( numRows - 1) * m];            
                    }
                    if(s[2 * ( numRows - 1) * m + numRows - 1] !== undefined){
                        strarr[numRows - 1] += s[2 * ( numRows - 1) * m + numRows - 1];            
                    }
                    for(var n = 1; n < numRows - 1; n++){  
                        if(s[2 * ( numRows - 1) * m - n] !== undefined){
                            strarr[n] += s[2 * ( numRows - 1) * m - n];
                        }
                        if(s[2 * ( numRows - 1) * m + n] !== undefined){
                            strarr[n] += s[2 * ( numRows - 1) * m + n];
                        }
                    }
                }
                for(var i = 0; i < numRows; i++){
                    strarr[i] += "";
                }
                return strarr.join("");
            }
            
        }
    
    }
    else{
        return "";
    }
};