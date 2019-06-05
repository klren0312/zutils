/**
 * 数字补零
 * @param {Number} num 数字
 * @param {Number} length 补零后长度
 * @return {String} 补零后字符串
 */
function numPadding (num, length) {
  return (Array(length).join('0') + num).slice(-length)
}

export default numPadding
