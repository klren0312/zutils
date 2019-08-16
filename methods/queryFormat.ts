/**
 * @desc 将参数对象转为url中的query字符串
 * @param {QueryObj} obj 参数对象, 例如 {a:1, b:2}
 * 
 * @return {string} 转换后的query字符串, 例如 'a=1&b=2'
 */
function queryFormat (obj: QueryObj | any): string {
  if (Object.prototype.toString.call(obj) !== '[object Object]') return ''
  if (JSON.stringify(obj) === '{}') return ''
  return Object.keys(obj).filter((v: any) => obj[v]).map((v: any) => `${v}=${obj[v]}`).join('&')
}

interface QueryObj {
  [propName: string]: string | number | undefined;
}

export default queryFormat
