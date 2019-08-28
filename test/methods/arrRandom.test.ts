import { arrRandom } from '../../index'

test('test arrRandom', () => {
  const arr: any[] = [1, 2, 3, 4, 5]
  const afterArr: any[] = [...new Set(arrRandom(arr, 4))]
  expect(afterArr.length).toBe(4)
  expect(() => arrRandom(arr, 6)).toThrowError()
})
