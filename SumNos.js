//c) Sum of all numbers in an array

var totSum=function(arr){
    var sum=0
for(var i=0;i<arr.length;i++){
sum=sum+arr[i]
}
return sum
}
console.log(totSum([100,2,1]))

//IIFE
(function(arr){
    var sum=0
    for(var i=0;i<arr.length;i++)
        sum=sum+arr[i]
    console.log(sum)
})([99,1,33])

// //Arrow Fn
var totSum1=(arr)=>{
    var sum=0
    for(var i=0;i<arr.length;i++){
      sum=sum+arr[i]
}
return sum
}
console.log(totSum1([10,20,12]))