function sleep(delay: number): any {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay * 1000)
  })
}