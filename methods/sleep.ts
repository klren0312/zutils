/**
 * @desc 睡眠函数
 * @param {Number} delay 睡眠时间 s
 * 
 * @return {Promise} Promise对象
 */
function sleep(delay: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay * 1000)
  })
}

export default sleep
