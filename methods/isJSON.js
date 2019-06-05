/**
 * 判断是否为 JSON 字符串
 * @param {String} str JSON字符串
 */
function isJSON(str) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str)
      if (obj && typeof obj === 'object') {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  return false
}

export default isJSON
