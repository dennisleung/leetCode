import { makeLink, ListNode, makeTree } from "./basic.js";

// Runtime: 56 ms, faster than 46.66% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 32.8 MB, less than 100.00% of JavaScript online submissions for Climbing Stairs.
var climbStairs = function (n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

test("test1", () => {
  expect(climbStairs(2)).toEqual(2);
});

test("test2", () => {
  expect(climbStairs(0)).toEqual(1);
});

test("test3", () => {
  expect(climbStairs(3)).toEqual(3);
});
