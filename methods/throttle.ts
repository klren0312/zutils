function throttle (callback: any, delay: number): any {
  let baseTime: number = 0
  return function () {
    const currentTime: number = Date.now()
    if (baseTime + delay < currentTime) {
      callback.apply(this, arguments)
    }
  }
}