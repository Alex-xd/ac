import Base from "../base.js";

class Solution extends Base {
  method(a, b) {
    return a + b;
  }
}

new Solution([[[1, 2], 3]]).method();
