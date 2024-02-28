//h) Rotate an array by k times

//Anonymous
var nums=[8,9,6,5,4];
var rotate = function(nums, k) {
    var k=3
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop()) 
    }
    return nums;
}
console.log(rotate(nums));

//IIFE
(function(nums, k) {
        var k=3
        for (let i = 0; i < k; i++) 
            nums.unshift(nums.pop())
        console.log(nums);
    })([8,9,6,5,4]);
    