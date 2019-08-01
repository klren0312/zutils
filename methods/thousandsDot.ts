/**
 * @desc 数字每三位打一个逗号
 * @param num 数字
 * 
 * @return 处理后的字符串
 */
function thousandsDot (num: number): string {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export default thousandsDot
