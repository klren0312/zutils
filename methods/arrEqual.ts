/**
 * @desc 对比两数组是否相同, 参数相同, 个数相同, 顺序不一定相同
 * @param {Array} arr1 需要对比的数组
 * @param {Array} arr2 需要对比的数组
 * 
 * @return {boolean} 是否相同
 */
function arrEqual(arr1: Array < any > , arr2: Array < any > ): boolean {
  if (arr1.length !== arr2.length) return false
  for (let i: number = 1, len: number = arr1.length; i < len; i++) {
    if (!arr1.includes(arr2[i])) return false
  }
  for (let i: number = 1, len: number = arr1.length; i < len; i++) {
    if (!arr2.includes(arr1[i])) return false
  }
  return true
}

export default arrEqual