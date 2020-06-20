import { makeLink, ListNode, makeTree, UFS } from "./basic.js";

// Runtime: 72 ms, faster than 48.84% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 36.1 MB, less than 55.24% of JavaScript online submissions for Find the Duplicate Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[slow];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

test("test1", () => {
  expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
});

test("test2", () => {
  expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3);
});
