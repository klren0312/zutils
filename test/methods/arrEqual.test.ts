import { arrEqual } from '../../index'

test('test arrEqual', () => {
  const arr1: Array<number> = [1, 2, 3, 4]
  const arr2: Array<number> = [1, 3, 4, 2]
  const arr3: Array<number> = [1, 2, 3, 4, 5]
  const arr4: Array<number> = [1, 3, 4, 6]
  const arr5: Array<string> = ['a', 'b', 'c']
  const arr6: Array<string> = ['c', 'a', 'b']
  const arr7: Array<any> = [2, 'a', 1, 'b', 'c']
  const arr8: Array<any> = ['c', 'a', 1, 'b', 2]
  const arr9: Array<number> = [2, 1, 3, 4]
  expect(arrEqual(arr1, arr2)).toBe(true)
  expect(arrEqual(arr1, arr3)).toBe(false)
  expect(arrEqual(arr4, arr9)).toBe(false)
  expect(arrEqual(arr2, arr4)).toBe(false)
  expect(arrEqual(arr5, arr6)).toBe(true)
  expect(arrEqual(arr7, arr8)).toBe(true)
})