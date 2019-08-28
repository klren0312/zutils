/**
 * @desc 数组随机抽取
 * 随机从数组中抽取指定数量的不重复项
 * 
 * @param {Array} arr 需要随机抽取的数组
 * @param {Number} num 抽取的数量
 * @return {Array} 抽取出来的数组
 */
function arrRandom (arr: any[], num: number): any[] {
  if (arr.length < num) throw 'Number exceeds the array\'s length'
  let result: any[] = []
  // 防止更改原数组
  const copyArr: any[] = JSON.parse(JSON.stringify(arr))
  let len: number = copyArr.length
  for (let i = 0; i < num; i++) {
    const index: number = Math.floor(Math.random() * len)
    result[i] = copyArr[index]
    ;[copyArr[index], copyArr[len - 1]] = [copyArr[len - 1], copyArr[index]]
    len--
  }
  return result
}

export default arrRandom
