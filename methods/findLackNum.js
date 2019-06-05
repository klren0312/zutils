/**
 * 查找顺序数字中缺少的数字
 * @param {Array<number>} nums 数字数组(可乱序)
 * @param {Number} startNum 起始数字
 */
function findLackNum (nums, ...startNum) {
  if (nums && nums.length > 0) {
    nums = nums.sort(function (a, b) {
      return a - b
    })
    var resArr = []
    for (var i = startNum.length > 0 ? startNum[0] : nums[0], len = nums[nums.length - 1]; i <= len; i++) {
      if (nums.indexOf(i) === -1) resArr.push(i)
    }
    return resArr
  } else {
    return []
  }
}

export default findLackNum
