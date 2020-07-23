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
  function debounce (fn: any, delay: number): Function

  /**
   * @desc 函数节流
   * 规定时间内多次执行函数, 只会执行一次
   * 
   * @param {Function} callback 执行函数
   * @param {Number} delay 延迟 ms
   * 
   * @return {Function} 新的节流函数
   */
  function throttle (callback: any, delay: number): Function 

  /**
   * @desc 睡眠函数
   * @param {Number} delay 睡眠时间 s
   * 
   * @return {Promise} Promise对象
   */
  function sleep(delay: number): Promise<void>

  /**
   * @desc 数组去重
   * @param {Array} arr 需要去重的数组
   * 
   * @return {Array} 去重后数组
   */
  function arrUnique (arr: Array<any>): Array<any>

  /**
   * @desc 判断项是否在数组里
   * @param {Array} items 数组 
   * @param {Any} item 项
   * 
   * @return {Boolean} 是否在数组里
   */
  function toIndexOf (items: Array<any>, item: any): boolean

  /**
   * @desc byte单位转换
   * @param {Number} size 大小
   * 
   * @return {String} 转换后的带单位字符串
   */
  function byteFormat (size: number): string

  /**
   * @desc 数字每三位打一个逗号
   * @param num 数字
   * 
   * @return 处理后的字符串
   */
  function thousandsDot (num: number): string

  /**
   * @desc 深拷贝
   * @param {Ojbect/Array} obj 拷贝的对象/数组
   * @param {Array} cache 缓存数组
   * 
   * @return {Ojbect/Array} 拷贝后的对象/数组
   */
  function deepCopy (obj: any, cache: Array<any>): any

  /**
   * @desc 生成guid
   * 
   * @return {String} guid
   */
  function guid (): string

  /**
   * @desc 数字补零
   * @param {Number} num 需要补零的数字
   * @param {Number} length 补零后的字符串长度
   * 
   * @return {String} 补零后的字符串
   */
  function numPadding (num: number, length: number): string

  /**
   * @desc 查找顺序数字中缺少的数字
   * @param {Array<number>} nums 数字数组(可乱序)
   * @param {Number} startNum 起始数字
   * 
   * @return {Array<number>} 缺少的数字数组
   */
  function findLackNum(nums: Array<number>, startNum?: number): Array<number>

  /**
   * @desc 数组按一定大小分割
   * @param {Array} array 需要分割的数组
   * @param {Number} size 分割大小
   * 
   * @return {Array} 分割后的数组
   */
  function arrChunk(array: Array<any>, size: number): Array<any>

  /**
   * @desc 检测是否是JSON字符串
   * @param {string} str 字符串
   * 
   * @return {boolean} 是否是JSON字符串
   */
  function isJSON (str: string): boolean

  /**
   * @desc 打乱数组
   * @param {Array} arr 数组
   * 
   * @return {Array} 打乱后的数组
   */
  function arrShuffle (arr: any[]): any[]

  /**
   * @desc 将参数对象转为url中的query字符串
   * @param {QueryObj} obj 参数对象, 例如 {a:1, b:2}
   * 
   * @return {string} 转换后的query字符串, 例如 'a=1&b=2'
   */
  function queryFormat (obj: QueryObj): string

  /**
   * @desc 对比两数组是否相同, 参数相同, 个数相同, 顺序不一定相同
   * @param {Array} arr1 需要对比的数组
   * @param {Array} arr2 需要对比的数组
   * 
   * @return {boolean} 是否相同
   */
  function arrEqual (arr1: Array<any>, arr2: Array<any>): boolean

  /**
   * @desc 数组随机抽取
   * 随机从数组中抽取指定数量的不重复项
   * 
   * @param {Array} arr 需要随机抽取的数组
   * @param {Number} num 抽取的数量
   * @return {Array} 抽取出来的数组
   */
  function arrRandom (arr: any[], num: number): any[]

  /**
   * @desc 字符串部分加密
   * @param {string | number} str 需要保密的字符串
   * @return {string} 部分加密后的字符串
   */
  function strSecret (str: string | number): string 

  /**
   * @desc 将数字转为中文大写
   * @param {Number} num 需要转为中文大写的数字
   * @return {String} 中文大写的数字
   */
  function numChineseCapital (num: number|string): string 
}

declare module "zutils" {
  export = zutils
}

interface QueryObj {
  [propName: string]: string | number | undefined;
}
