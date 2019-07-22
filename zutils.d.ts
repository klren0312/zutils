declare namespace zutils {
  /**
   * @desc 函数防抖
   * 保证函数在规定ms内不被触发, 只执行一次
   * 
   * @param {Function} fn 执行的函数
   * @param {Number} delay 延迟 ms
   * 
   * @return {Function} 新的防抖函数
   */
  export function debounce (fn: any, delay: number): Function

  /**
   * @desc 函数节流
   * 规定时间内多次执行函数, 只会执行一次
   * 
   * @param {Function} callback 执行函数
   * @param {Number} delay 延迟 ms
   * 
   * @return {Function} 新的节流函数
   */
  export function throttle (callback: any, delay: number): Function 

  /**
   * @desc 睡眠函数
   * @param {Number} delay 睡眠时间 s
   * 
   * @return {Promise} Promise对象
   */
  export function sleep(delay: number): Promise<void>

  /**
   * @desc 数组去重
   * @param {Array} arr 需要去重的数组
   * 
   * @return {Array} 去重后数组
   */
  export function arrUnique (arr: Array<any>): Array<any>

  /**
   * @desc 判断项是否在数组里
   * @param {Array} items 数组 
   * @param {Any} item 项
   * 
   * @return {Boolean} 是否在数组里
   */
  export function toIndexOf (items: Array<any>, item: any): boolean

  /**
   * @desc byte单位转换
   * @param {Number} size 大小
   * 
   * @return {String} 转换后的带单位字符串
   */
  export function byteFormat (size: number): string

  /**
   * @desc 数字每三位打一个逗号
   * @param num 数字
   * 
   * @return 处理后的字符串
   */
  export function thousandsDot (num: number): string

  /**
   * @desc 深拷贝
   * @param {Ojbect/Array} obj 拷贝的对象/数组
   * @param {Array} cache 缓存数组
   * 
   * @return {Ojbect/Array} 拷贝后的对象/数组
   */
  export function deepCopy (obj: any, cache: Array<any>): any

  /**
   * @desc 生成guid
   * 
   * @return {String} guid
   */
  export function guid (): string

  /**
   * @desc 数字补零
   * @param {Number} num 需要补零的数字
   * @param {Number} length 补零后的字符串长度
   * 
   * @return {String} 补零后的字符串
   */
  export function numPadding (num: number, length: number): string

  /**
   * 查找顺序数字中缺少的数字
   * @param {Array<number>} nums 数字数组(可乱序)
   * @param {Number} startNum 起始数字
   * 
   * @return {Array<number>} 缺少的数字数组
   */
  export function findLackNum(nums: Array<number>, ...startNum: Array<number>): Array<number>

  /**
   * 数组按一定大小分割
   * @param {Array} array 需要分割的数组
   * @param {Number} size 分割大小
   * 
   * @return {Array} 分割后的数组
   */
  export function arrChunk(array: Array<any>, size: number): Array<any>

  /**
   * 检测是否是JSON字符串
   * @param {string} str 字符串
   * 
   * @return {boolean} 是否是JSON字符串
   */
  export function isJSON (str: string): boolean
}

declare module "zutils" {
  export = zutils
}
