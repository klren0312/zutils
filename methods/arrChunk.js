/**
 * 数组按一定大小分割
 * @param {Array} array 需要分割的数组
 * @param {Number} size 分割大小
 *
 * @return {Array} 分割后的数组
 */
function arrChunk (array, size) {
  size = Math.max(size, 0)
  const length = array ? array.length : 0
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  let result = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

export default arrChunk
