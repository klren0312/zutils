function arrShuffle (arr: any): any[]
function arrShuffle (arr: any[]): any[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('prop need Array');
  }
  if (arr.length === 0) return [];
  for(let i:number = 0, len: number = arr.length; i < len; i++) {
    let j: number = Math.floor(Math.random() * len);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default arrShuffle
