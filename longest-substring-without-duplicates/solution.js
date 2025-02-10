import Base from "../base.js";

class Solution extends Base {
  /**
   * @param {string} s
   * @return {number}
   *
   * 0123456
   * zxyzxyz
   *  l  r
   * r
   * dict = { z, x, y }
   */
  lengthOfLongestSubstring(s) {
    if (typeof s !== "string") {
      return 0;
    }
    if (s.length <= 1) {
      return s.length;
    }

    let l = 0,
      r = 0;
    let maxL = 0;
    const dict = {}; // { d: 2, v: 1 }

    while (r < s.length) {
      if ((dict[s[r]] || 0) < 1) {
        dict[s[r]] = (dict[s[r]] || 0) + 1;
        maxL = Math.max(r - l + 1, maxL);
      } else {
        dict[s[r]] = (dict[s[r]] || 0) + 1;
        while (dict[s[r]] > 1) {
          dict[s[l]] -= 1;
          l += 1;
        }
      }
      r += 1;
    }

    return maxL;
  }
}

const s = new Solution([
  ["zxyzxyz", 3],
  ["pwwkew", 3],
  ["dvdf", 3],
]);
s.lengthOfLongestSubstring();
