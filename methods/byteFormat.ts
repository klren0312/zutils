/**
 * @desc byte单位转换
 * @param {Number} size 大小
 * 
 * @return {String} 转换后的带单位字符串
 */
function byteFormat (size: number): string {
  if (typeof size !== 'number') {
		throw new Error('size must be number')
	}
  if (size === 0) {
    return '0 Byte'
  }
  const unit: Array<string> = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB']
  let pos: number = 0
  while (size >= 1024) {
    size /= 1024
    ++pos
  }
  return `${size} ${unit[pos]}`
}

export default byteFormat
