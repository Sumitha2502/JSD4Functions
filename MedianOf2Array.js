//f)Return median of two sorted arrays of the same size.

var arr1=[10,30,12,4]
var arr2=[1,8,9,3]
var mergeArr=[...arr1,...arr2] 
var sortArr=mergeArr.sort((a,b)=>a-b);

var findMedianSortedArrays = function(sortArr) {
    var length =sortArr.length
    var SecMidNo= length/2
    var FirstMidNo = SecMidNo-1
    var firstNo= sortArr[FirstMidNo]
    var secNo=sortArr[SecMidNo]
    var addMedianOf2 = firstNo+secNo
    var divaddMedianOf2 = addMedianOf2/2
    console.log(divaddMedianOf2)
    
    }
    findMedianSortedArrays(sortArr)








