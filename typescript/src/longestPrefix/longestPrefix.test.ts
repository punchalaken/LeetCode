import { longestCommonPrefix } from "./longestPrefix";

describe("longestCommonPrefix", () => {
  test("returns common prefix for strings with common starting", () => {
    const strs = ["flower", "flow", "flight"];
    expect(longestCommonPrefix(strs)).toBe("fl");
  });

  test("returns empty string when no common prefix", () => {
    const strs = ["dog", "racecar", "car"];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("returns the prefix when all strings are the same", () => {
    const strs = ["test", "test", "test"];
    expect(longestCommonPrefix(strs)).toBe("test");
  });

  test("returns empty string for an array with one empty string", () => {
    const strs = [""];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("returns single character for single character strings", () => {
    const strs = ["a", "a", "a"];
    expect(longestCommonPrefix(strs)).toBe("a");
  });

  test("returns prefix for strings with different lengths", () => {
    const strs = ["ab", "abcc", "abcde"];
    expect(longestCommonPrefix(strs)).toBe("ab");
  });

  test("handles special characters in strings", () => {
    const strs = ["!@#$%^", "!@#$%^&*", "!@#$%^&*()"];
    expect(longestCommonPrefix(strs)).toBe("!@#$%^");
  });

  test("handles strings with numbers", () => {
    const strs = ["123abc", "123xyz", "123"];
    expect(longestCommonPrefix(strs)).toBe("123");
  });
});
