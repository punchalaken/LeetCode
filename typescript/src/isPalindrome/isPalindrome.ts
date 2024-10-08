export function isPalindrome(str: string): boolean {
  str = str.toLowerCase().split(" ").join("");

  for (let i = 0; i != Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}
