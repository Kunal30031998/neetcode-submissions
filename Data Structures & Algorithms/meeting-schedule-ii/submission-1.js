/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map((a) => a.start).sort((a,b) => a - b)
        let end = intervals.map((a) => a.end).sort((a,b) => a - b)

        let l = 0, r = 0;
        let counter = 0;
        let maxRoom = 0

        while(l < intervals.length){
            if(start[l] < end[r]){
                counter++;
                l++;
            }
            else{
                counter--;
                r++;
            }
            maxRoom = Math.max(maxRoom, counter)
        }
        return maxRoom
    }
}
