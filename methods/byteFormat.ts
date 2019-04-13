function byteFormat (size: number): string {
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