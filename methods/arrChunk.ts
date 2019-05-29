/**
 * 数组按一定大小分割
 * @param {Array} array 需要分割的数组
 * @param {Number} size 分割大小
 * 
 * @return {Array} 分割后的数组
 */
function arrChunk (array: Array<any>, size: number): Array<any> {
  size = Math.max(size, 0)
  const length: number = array ? array.length : 0
  if (!length || size < 1) {
    return []
  }
  let index: number = 0
  let resIndex: number = 0
  const result: Array<any> = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

export default arrChunk
