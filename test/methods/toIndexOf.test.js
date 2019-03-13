import { toIndexOf } from '../../index'

test('test whether it is in array', () => {
  const arr = [1, 2, 3, 4, 5]
  let item = 3
  expect(toIndexOf(arr, item)).toBe(true)
  item = 6
  expect(toIndexOf(arr, item)).toBe(false)
})

test('test if array is empty', () => {
  let arr = []
  let item = 3
  expect(toIndexOf(arr, item)).toBe(false)
})

test('test if array\'type is not Array', () => {
  let arr = ''
  let item = 3
  expect(toIndexOf(arr, item)).toBe(false)
})