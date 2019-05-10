function deepCopy (obj: any, cache: any[] = []): any {
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  const hit: any = cache.filter(v => v.original === obj)[0]
  if (hit) {
    return hit.copy
  }

  const copy: any = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(v => {
    copy[v] = deepCopy(obj[v], cache)
  })

  return copy
}