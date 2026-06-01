class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = {};
        for(let i=0;i<nums.length;i++){
            const updatedTarget = target - nums[i];
            if(updatedTarget in count){
                return [count[updatedTarget], i];
            }
            else{
                count[nums[i]] = i
            }
        }
    }
}
