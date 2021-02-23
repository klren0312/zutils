/**
 * @desc 简单取交集
 *
 * @param {Array<string | number>} source 源数据
 * @param {Array<string | number>} comparison 对比的数据
 *
 * @returns {Array<string | number>}
 */
function arrIntersection (source: (string | number)[], comparison: (string | number)[]) {
  return comparison.filter(v => source.includes(v))
}

export default arrIntersection
