//e) Return all the palindromes in an array

var string=["madam"]
var str=string[0].split("")
var checkPalindrome=function(str) {
    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return str.join("") + " " + "NOT a palindrome";
      }
    }
    return  str.join("") + " " + "is a palindrome";
  }
  console.log(checkPalindrome(str))

//IIFE
(function(string) {
    var str=string[0].split("")
    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        console.log(str.join("") + " " + "NOT a palindrome");
      }
      else
      {
      console.log(str.join("") + " " + "is a palindrome");
    } }
  })(["mgm"])
  
// //Arrow Fn
var string=["123321"]
var str=string[0].split("")
var checkPalindrome=()=> {
    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return str.join("") + " " + "NOT a palindrome";
      }
    }
    return  str.join("") + " " + "is a palindrome";
  }
  console.log(checkPalindrome(str))




//OR
//   var palind=function(a){
//     var res="";
//     var ans="";
//     for(i=0;i<a.length;i++)
//     {
//         res+=a[i];
//         var count=0
        
//         for(j=0;j<res.length;j++)
//         {
//             if(res[j]===res[((res.length-1)-j)]) 
//             {
//                 count++
                
//             }
//         }
//         if(count===res.length)
//         {
//             ans+=res+" "
//         }
//         res="";
//     }
//     return ans;
 
// }
// console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))
