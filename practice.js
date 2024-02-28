//d) Return all the prime numbers in an array

//Anonymous Fn
// let primeNumber=[1,2,3,4,5,6,7,8,9,10,11]
// let findPrimeNum=function(){
//     let result=""
//     for(let i=0;i<primeNumber.length;i++){
//         let flag=0;
//         for(let j=1;j<primeNumber[i];j++){
//             if(primeNumber[i]%j===0){
//                 flag++;
//             }
//         }
//         if(flag==1){
//             result+=primeNumber[i]+" "
//         }
//     }
//     console.log("Prime Numbers using anonymous function:",result)
// }
// findPrimeNum(primeNumber);

//IIFE
// (function(primeNum){
//     let res=""
//     for(let i=0;i<primeNum.length;i++){
//         flag=0;
//         for(j=1;j<primeNum[i];j++){
//             if(primeNum[i]%j===0){
//                 flag++;
//             }
//         }
//         if(flag==1){
//             res+=primeNum[i]+" "
//         }
//     }
// console.log("prime nos using IIFE function:",res)
// })([11,12,13,14,15,16,17,18,19,20]);

//Arrow Fn
// let primeNumber=[1,2,3,4,5,6,7,8,9,10,11]
// let findPrimeNum=()=>{
//     let result=""
//     for(let i=0;i<primeNumber.length;i++){
//         let flag=0;
//         for(let j=1;j<primeNumber[i];j++){
//             if(primeNumber[i]%j===0){
//                 flag++;
//             }
//         }
//         if(flag==1){
//             result+=primeNumber[i]+" "
//         }
//     }
//     console.log("Prime Numbers using arrow function:",result)
// }
// findPrimeNum(primeNumber);

//e) Return all the palindromes in an array
// var arrString=["123321","madam","desk","mgm"]
// var pallindrome=function(){
//     var len=arrString[0].split(" ");
//     for(var i=0;i<len.length;i++){
//         if(len[i] !== len.length-1-i){
//             console.log("Not a pallindrome")
//         }
//     }
//     console.log(arrString[i] + " " + "is a pallindrome")
// }
// pallindrome(arrString)

//(OR)
// var str=["123321"]
// var checkPalindrome=function(str) {
//     var len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         return str + " " + "NOT a palindrome";
//       }
//     }
//     return  str + " " + "is a palindrome";
//   }
//   console.log(checkPalindrome(str))

//(OR)
  
// function palindrome(arr, n) 
// { 
//     // Initialise flag to zero. 
//     let flag = 0; 
 
//     // Loop till array size n/2. 
//     for (let i = 0; i <= n / 2 && n != 0; i++) { 
 
//         // Check if first and last element are different 
//         // Then set flag to 1. 
//         if (arr[i] != arr[n - i - 1]) { 
//             flag = 1; 
//             break; 
//         } 
//     } 
 
//     // If flag is set then print Not Palindrome 
//     // else print Palindrome. 
//     if (flag == 1) 
//         console.log("Not Palindrome"); 
//     else
//         console.log("Palindrome"); 
// } 
 
// // Driver code. 
  
//     let arr = [ "123", "2112", "30", "2" ]; 
//     let n = arr.length; 
 
//     palindrome(arr, n); 






//IIFE
// (function(){
//     var string =("car","racecar","mgm");
//     var len=string.length;
//     for(var i=0;i<len/2;i++){
//         if(string[i] !=string[len-1-i]){
//             return  "It is not a palindrome";
//         }
//     }
//     console.log(string + " " +"is a palindrome");
// })();

//Arrow Fn
// var arrString=["123321","desk","mgm"]
// var pallindrome=()=>{
//     var len=arrString.length/2;
//     for(var i=0;i<len;i++){
//         if(arrString[i] !== len-1-i){
//             console.log("Not a pallindrome")
//         }
//     }
//     console.log(arrString[i] + " " + "is a pallindrome")
// }
// pallindrome(arrString)

////(OR)
var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))

//f)Return median of two sorted arrays of the same size.
// var arr1=[1,2,3,4]
// var arr2

// merge
// sort 
// arr3.length= check it is even 
//////////
// var arr=function(a,b){
//     var c=[];
//     var n=a.length;
//     var p=b.length;
//     var i=0;
//     var j=0;
//     var med=0;
//     while(i<n && j<p)
//     {
//         if(a[i]<b[j])
//         {
//             c.push(a[i])
//             i++
//         }
//         else
//         {
//             c.push(b[j])
//             j++
//         }
//     }
    
//      if(i<n)
//      {
//          for(let k=i;k<n;k++)
//          {
//              c.push(a[k])
//          }

//      }
//      else if(j<p)
//      {
//          for(let m=j;m<p;m++)
//          {
//              c.push(b[m])
//          }
//      }
//      if(c.length%2===0)
//      {
//          med=(c[(c.length/2)-1]+c[c.length/2])/2
//      }
//      else
//      {
//          med=c[Math.floor(c.length/2)]
//      }
//      return med;
    
// }
// console.log(arr([1,2,3,7],[4,5,6,8]));


//g) Remove duplicates from an array

// Anonymous Function : 
// var dupArr=function(array){
//     var dup = [...new Set(array)];
//     return dup
//   }
//   console.log(dupArr([1,1,2,3,4,6,6,10]));
/////////////////////

//IIFE :                
// (function(array){
//     let dup = [...new Set(array)];
//     console.log(dup);
//    })([1,1,2,3,4])

//h) Rotate an array by k times
// var nums=[8,9,6,5,4]
// var rotate = function(nums,k) {
//     var k=3
//     for (var i = 0; i < k; i++) {
//         nums.unshift(nums.pop()) 
//     }
//     return nums;
// }
// console.log(rotate(nums))

// //(OR)
// var nums=[1,2,3,4,5,6,7]
// var k=3
// var revNums= (nums,start,end)=>{
//     while(start<end){
//         [nums[start],nums[end]] = [nums[end],nums[start]];
//         start++;
//         end--;
//     }
// }
// var rotate=function(nums,k){
//     k=k % nums.length;
//     revNums(nums,0, k-1)
//     revNums(nums,k,nums.length-1);
// }
// console.log(rotate(revNums));



/* This function returns median of ar1[] and ar2[].
Assumptions in this function:
Both ar1[] and ar2[] are sorted arrays
// Both have n elements */
// function getMedian(ar1, ar2, n)
// {
//     var i = 0; /* Current index of i/p array ar1[] */
//     var j = 0; /* Current index of i/p array ar2[] */
//     var count;
//     var m1 = -1, m2 = -1;
 
//     /* Since there are 2n elements, median will be average
//     of elements at index n-1 and n in the array obtained after
//     merging ar1 and ar2 */
//     for (count = 0; count <= n; count++)
//     {
//         /*Below is to handle case where all elements of ar1[] are
//         smaller than smallest(or first) element of ar2[]*/
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
 
//         /*Below is to handle case where all elements of ar2[] are
//         smaller than smallest(or first) element of ar1[]*/
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         /* equals sign because if two
//             arrays have some common elements */
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar2[j];
//             j++;
//         }
//     }
 
//     return (m1 + m2)/2;
// }
 
// /* Driver program to test above function */
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     document.write("Median is "+ getMedian(ar1, ar2, n1));
// else
//     document.write("Doesn't work for arrays of unequal size");
 