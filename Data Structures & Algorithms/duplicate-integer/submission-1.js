class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let foundDup = false;
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i] == nums[j]){
                    foundDup = true;
                    break;
                }
            }
            if(foundDup) {
                break;
            }
        }
        return foundDup
    }
}
