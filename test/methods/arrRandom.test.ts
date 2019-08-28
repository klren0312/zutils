import { arrRandom, arrUnique } from '../../index'

test('test arrRandom', () => {
  const arr: any[] = [1, 2, 3, 4, 5]
  // https://stackoverflow.com/questions/33464504/using-spread-syntax-and-new-set-with-typescript/33464709
  // so can not use [...new Set()]
  const afterArr: any[] = arrUnique(arrRandom(arr, 4))
  expect(afterArr.length).toBe(4)
  expect(() => arrRandom(arr, 6)).toThrowError()
})
