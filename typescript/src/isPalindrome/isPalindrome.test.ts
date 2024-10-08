import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  it("should return an true value", () => {
    const str = "А роза упала на лапу азора";

    expect(isPalindrome(str)).toBe(true);
  });

  it("should return an false value", () => {
    const str = "привет";

    expect(isPalindrome(str)).toBe(false);
  });

  it("should return true for a palindrome with numbers", () => {
    const str = "12321";
    expect(isPalindrome(str)).toBe(true);
  });
});
