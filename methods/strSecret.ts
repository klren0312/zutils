/**
 * 字符串部分加密
 * @param {string | number} str 需要保密的字符串
 * @return {string} 部分加密后的字符串
 */
function strSecret (str: string | number): string {
  let currentStr: string = ''
  let secretStr: string = ''
  if (typeof str === 'number') {
    currentStr = str + ''
  } else {
    currentStr = str
  }
  if (currentStr.length > 8) {
    secretStr = currentStr.substring(0, 4) + '********' + currentStr.substring(currentStr.length - 4)
  } else if (currentStr.length > 4) {
    secretStr = currentStr.substring(0, 2) + '****' + currentStr.substring(currentStr.length - 2)
  } else {
    secretStr = currentStr
  }
  return secretStr
}

export default strSecret
