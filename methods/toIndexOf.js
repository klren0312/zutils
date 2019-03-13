/**
 * 判断项是否在数组里
 * @param {Array} items 数组 
 * @param {Any} item 项
 * @return {Boolean} true - 在   false - 不在
 */
function toIndexOf (items, item) {
  if (items && Array.isArray(items) && items.length > 0) {
    return !!~items.indexOf(item)
  } else {
    return false
  }
}

export default toIndexOf