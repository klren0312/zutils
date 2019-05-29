function findLackNum (nums: Array<number>, ...startNum: Array<number>): Array<number> {
  if (nums && nums.length > 0) {
    nums = nums.sort((a, b) => a - b)
    let resArr: Array<number> = []
    for (let i: number = startNum.length > 0  ? startNum[0] : nums[0], len: number = nums[nums.length - 1]; i <= len; i++) {
      if (nums.indexOf(i) === -1) resArr.push(i)
    }
    return resArr
  } else {
    return []
  }
}

export default findLackNum
