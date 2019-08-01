/**
 * @desc 深拷贝
 * @param {Ojbect/Array} obj 拷贝的对象/数组
 * @param {Array} cache 缓存数组
 * 
 * @return {Ojbect/Array} 拷贝后的对象/数组
 */
function deepCopy (obj: any, cache: Array<any> = []): any {
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  const hit: any = cache.filter(v => v.original === obj)[0]
  if (hit) {
    return hit.copy
  }

  /* istanbul ignore next */
  const copy: any = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(v => {
    copy[v] = deepCopy(obj[v], cache)
  })

  return copy
}

export default deepCopy