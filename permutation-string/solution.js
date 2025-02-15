import Base from "../base.js";

class Solution extends Base {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    let l = 0,
      r = -1;

    const s1Dict = {};
    const s2Dict = {};
    let matchedCount = 0;

    for (let i = 0; i <= s1.length - 1; i++) {
      s1Dict[s1[i]] = (s1Dict[s1[i]] || 0) + 1;
    }

    while (r < s2.length - 1) {
      if (matchedCount === s1.length) {
        return true;
      }

      if (r >= s1.length - 1) {
        s2Dict[s2[l]] -= 1;
        if (s2Dict[s2[l]] < s1Dict[s2[l]]) {
          matchedCount -= 1;
        }
        l += 1;
      }

      r += 1;
      s2Dict[s2[r]] = (s2Dict[s2[r]] || 0) + 1;
      if (s1Dict[s2[r]] && s2Dict[s2[r]] <= s1Dict[s2[r]]) {
        matchedCount += 1;
      }
    }
    return matchedCount === s1.length;
  }
}

new Solution([
  [["hello", "ooolleoooleh"], false],
  [["adc", "dcda"], true],
  [["abc", "lecabee"], true],
  [["abc", "lecaabee"], false],
  [["aac", "aaabee"], false],
  [["aac", "acabee"], true],
]).checkInclusion();
