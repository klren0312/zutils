/**
 * @desc 数组去重
 * @param {Array} arr 需要去重的数组
 * 
 * @return {Array} 去重后数组
 */
function arrUnique (arr: Array<any>): Array<any> {
  let obj: {
    [index: string]: Boolean
  } = {},
      len: number = arr.length,
      res: Array<any> = []
  for (let i: number = 0; i < len; i++) {
    let type: string = typeof arr[i]
    if (!obj[arr[i] + type]) {
      obj[arr[i] + type] = true
      res.push(arr[i])
    }
  }
  return res
}

export default arrUnique
