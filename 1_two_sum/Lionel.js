/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var num_length = nums.length;
    var result = [];
    for(var i = 0; i <= num_length - 1; i++){
        for(var j = i+1; j <= num_length - 1; j++){
            if(nums[i] + nums[j] == target){
                result.push(i);
                result.push(j);
            }
        }
    }
    
    return result;
};