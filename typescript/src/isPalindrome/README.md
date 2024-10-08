# [Palindrome](https://leetcode.com/problems/palindrome-number/description/)

## Description

Given an integer x, return true if x is a palindrome, and false otherwise.

#### Example 1:

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

#### Example 2:

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

#### Example 3:

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

Solutions:

```
function isPalindrome(str: string): boolean {
  str = String(str).toLowerCase().split(" ").join("");

  for (let i = 0; i != Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}
```

- Complexity: O(n)
