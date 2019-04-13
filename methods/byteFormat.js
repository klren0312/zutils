/**
 * byte单位转换
 * @param {Int} size
 */
function byteFormat(size) {
	if (typeof size !== 'number') {
		throw new Error('size must be number')
	}
	if (size === 0) {
		return '0 Byte';
	}
	var unit = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB'];
	var pos = 0;
	while (size >= 1024) {
		size /= 1024;
		++pos;
	}
	return size + " " + unit[pos];
}

export default byteFormat