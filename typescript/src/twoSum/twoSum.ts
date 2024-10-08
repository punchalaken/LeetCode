export function twoSum(nums: number[], target: number): number[] {
  const numbersObject: { [key: string]: number } = {};

  for (let i = 0; i != nums.length; i++) {
    if (target - nums[i] in numbersObject) {
      return [numbersObject[target - nums[i]], i];
    }

    numbersObject[nums[i]] = i;
  }

  return [];
}
