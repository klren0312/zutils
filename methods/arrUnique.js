
/**
 * 数组去重, hash方法
 * @param {Array} arr 数组
 */
function arrUnique (arr) {
  let obj = {}
  let res = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let type = typeof arr[i] // 防止出现 1 和 '1' 被归为重复
    if (!obj[arr[i] + type]) {
      obj[arr[i] + type] = true
      res.push(arr[i])
    }
  }
  return res
}
export default arrUnique
