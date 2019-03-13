function arrUnique (arr: any[]): any[] {
  let obj: object = {},
      len: number = arr.length,
      res: any[] = []
  for (let i: number = 1; i < len; i++) {
    let type: string = typeof arr[i]
    if (!obj[arr[i] + type]) {
      obj[arr[i] + type] = true
      res.push(arr[i])
    }
  }
  return res
}