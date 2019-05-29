function arrUnique (arr: Array<any>): Array<any> {
  let obj: {
    [index: string]: Boolean
  } = {},
      len: number = arr.length,
      res: Array<any> = []
  for (let i: number = 1; i < len; i++) {
    let type: string = typeof arr[i]
    if (!obj[arr[i] + type]) {
      obj[arr[i] + type] = true
      res.push(arr[i])
    }
  }
  return res
}

export default arrUnique
