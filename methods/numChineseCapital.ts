/**
 * @desc 将数字转为中文大写
 * @param {Number} num 需要转为中文大写的数字
 * 
 * @return {String} 中文大写的数字
 */
function numChineseCapital (num: number|string): string {
  if (num !== undefined) {
    if (num === '') {
      return ''
    }
    num = +num // 转换为数字
    if (+num === 0) {
      return '零'
    }
    let strOutput: string = ''
    let strUnit: string = '仟佰拾亿仟佰拾万仟佰拾元角分'
    let numStr = num + '00'
    let intPos = numStr.indexOf('.')
    if (intPos >= 0) {
      numStr = numStr.substring(0, intPos) + numStr.substring(intPos + 1, intPos + 3)
    }
    strUnit = strUnit.substring(strUnit.length - numStr.length, strUnit.length)
    for (let i: number = 0; i < numStr.length; i++) {
      strOutput += '零壹贰叁肆伍陆柒捌玖'.split('').splice(parseInt(numStr.split('').splice(i, 1).join('')), 1).join('') + strUnit.split('').splice(i, 1).join('')
    }
    return strOutput.replace(/^零角零分$/, '').replace(/零角零分$/, '整').replace(/^零元零角/, '').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元').replace(/零角/, '零').replace(/零元/, '').replace(/零分$/, '')
  }
  return ''
}

export default numChineseCapital
