function queryFormat (obj: any): string 
function queryFormat (obj: QueryObj): string {
  if (Object.prototype.toString.call(obj) !== '[object Object]') return ''
  if (JSON.stringify(obj) === '{}') return ''
  return Object.keys(obj).filter((v: any) => obj[v]).map((v: any) => `${v}=${obj[v]}`).join('&')
}

interface QueryObj {
  [propName: string]: string | number | undefined;
}

export default queryFormat
