//a) Print odd numbers in an array

//Anonymous fn
var odd=[]
var result= function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 != 0)
        odd.push(arr[i])
    }
        return odd;
}
console.log(result([15,11,2,44]))

//(OR)
var obj={}
var res=function(arr){
    for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0)
          obj[arr[i]]="odd"
  }
   return obj
}
  console.log(res([1,2,3]))

//IIFE
(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 != 0)
        console.log(arr[i])
}
})([11,12,13,14])

//Arrow Fn
var oddNumbers=(arr)=>{
        for(var i = 0 ; i< arr.length ; i++){
              if(arr[i]%2!=0)
              oddNumbers[arr[i]]="odd"
      }
       return oddNumbers
    }
      console.log(oddNumbers([121,2,3]))