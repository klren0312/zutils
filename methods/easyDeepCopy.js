/**
 * 简单深拷贝 (对象或数组中没有函数等)
 * @param {Object} obj
 */
function easyDeepCopy (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

export default easyDeepCopy
