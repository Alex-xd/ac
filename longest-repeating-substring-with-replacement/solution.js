import Base from "../base.js";

class Solution extends Base {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let maxCount = 0; // most frequent character count in current frame
    let start = 0;
    let maxLength = 0;
    const count = {};

    for (let end = 0; end < s.length; end++) {
      const char = s[end];
      count[char] = (count[char] || 0) + 1;
      maxCount = Math.max(maxCount, count[char]);
      if (end - start + 1 - maxCount > k) {
        count[s[start]]--;
        start++;
      }
      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
  }
}

new Solution([
  [["XYYX", 2], 4],
  [["AAABABB", 1], 5],
]).characterReplacement();
