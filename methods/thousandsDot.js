/**
 * 数字每三位打一个逗号
 * @param {Number} num 
 */
function thousandsDot(num) {
	return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 另一种方法
// num.toLocaleString()

export default thousandsDot
