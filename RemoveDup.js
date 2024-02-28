//g) Remove duplicates from an array

//Anonymous
var removeDup=function(nums){
for(let i=0;i<nums.length;i++){
    for(j=nums.length;j>=i+1;j--)
        if(nums[i] == nums[j])
        nums.splice(i,1)        
}
return nums
}
console.log(removeDup([1,2,2,5,8,4,4,4]));

//IIFE
(function(nums){
    for(let i=0;i<nums.length;i++){
        for(j=nums.length;j>=i+1;j--)
            if(nums[i] == nums[j])
            nums.splice(i,1)        
    }
    console.log(nums)
    })([1,2,2,5,8,4,4,4]);
