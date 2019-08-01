/**
 * @desc 判断项是否在数组里
 * @param {Array} items 数组 
 * @param {Any} item 项
 * 
 * @return {Boolean} 是否在数组里
 */
function toIndexOf (items: Array<any> | any, item: any): boolean {
  if (items && Array.isArray(items) && items.length > 0) {
    return !!~items.indexOf(item)
  } else {
    return false
  }
}

export default toIndexOf
