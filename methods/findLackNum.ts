/**
 * @desc 查找顺序数字中缺少的数字
 * @param {Array<number>} nums 数字数组(可乱序)
 * @param {Number} startNum 起始数字
 * 
 * @return {Array<number>} 缺少的数字数组
 */
function findLackNum (nums: Array<number>, startNum?: number): Array<number> {
  if (nums && nums.length > 0) {
    nums = nums.sort((a, b) => a - b)
    let resArr: Array<number> = []
    for (let i: number = startNum ? startNum : nums[0], len: number = nums[nums.length - 1]; i <= len; i++) {
      if (nums.indexOf(i) === -1) resArr.push(i)
    }
    return resArr
  } else {
    return []
  }
}

export default findLackNum
