export function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  let result: string = "";

  for (let i = 0; i != strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      result += strs[0][i];
    } else {
      return result;
    }
  }

  return result;
}
