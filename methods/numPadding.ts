/**
 * @desc 数字补零
 * @param {Number} num 需要补零的数字
 * @param {Number} length 补零后的字符串长度
 * 
 * @return {String} 补零后的字符串
 */
function numPadding (num: number, length: number): string {
  return (Array(length).join('0') + num).slice(-length)
}

export default numPadding
