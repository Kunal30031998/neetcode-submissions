class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length == 0)
        {
            return false;
        }
        let i=0, j=i+1, foundDup = false;
        const sortedNums = nums.sort()
        while(i != sortedNums.length - 1){
            if(sortedNums[i] != sortedNums[j]){
                i = i+1;
                j = i+1;
                continue;
            }
            else{
                foundDup = true;
                break
            }
        }
        return foundDup
    }
}
