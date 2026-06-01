class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let firstIndex, secondIndex;
        for(let i=0;i<nums.length;i++){
            const updatedTarget = target - nums[i];
            for(let j=i+1;j<nums.length;j++){
                if(updatedTarget == nums[j]){
                    secondIndex = j;
                    firstIndex = i
                    break;
                }
            }
            if(secondIndex){
                break;
            }
        }
        return [firstIndex, secondIndex]
    }
}
