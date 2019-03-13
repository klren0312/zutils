function toIndexOf (items: any[], item: any): boolean {
  if (items && Array.isArray(items) && items.length > 0) {
    return !!~items.indexOf(item)
  } else {
    return false
  }
}