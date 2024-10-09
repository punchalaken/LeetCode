export function romanToInt(roman: string): number {
  const objRoman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arrayRoman: string[] = roman.split("");
  let result: number = 0;

  for (let i = 0; i < arrayRoman.length; i++) {
    if (objRoman[arrayRoman[i]] < objRoman[arrayRoman[i + 1]]) {
      result -= objRoman[arrayRoman[i]];
    } else {
      result += objRoman[arrayRoman[i]];
    }
  }

  return result;
}
