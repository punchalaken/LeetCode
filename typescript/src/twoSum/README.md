# [Two Sum](https://leetcode.com/problems/two-sum/)

## Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

#### Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

#### Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

#### Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

```
function twoSum(nums: number[], target: number): number[] {
  const numbersObject: { [key: string]: number } = {};

  for (let i = 0; i != nums.length; i++) {
    if (target - nums[i] in numbersObject) {
      return [numbersObject[target - nums[i]], i];
    }

    numbersObject[nums[i]] = i;
  }

  return [];
}
```

- Complexity: O(n)