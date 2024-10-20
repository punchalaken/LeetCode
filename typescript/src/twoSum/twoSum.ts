export function twoSum(nums: number[], target: number) {
  const numbersObject: {[key: number]: number} = {};

  for (let i = 0; i != nums.length; i++) {
    if (target - nums[i] in numbersObject) {
      return [numbersObject[target - nums[i]], i];
    }

    numbersObject[nums[i]] = i;
  }

  return [];
}