function throttle (callback: any, delay: number): Function {
  let baseTime: number = 0
  return function (): void {
    const currentTime: number = Date.now()
    if (baseTime + delay < currentTime) {
      callback.apply(this, arguments)
    }
  }
}

export default throttle
