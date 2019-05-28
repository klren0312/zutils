import { findLackNum } from '../../index'

test('if don\'t have startNum', () => {
  expect(findLackNum([2, 4, 5])).toEqual([3])
})

test('if has startNum', () => {
  expect(findLackNum([2, 4, 5], 1)).toEqual([1, 3])
})

test('nums has no number', () => {
  expect(findLackNum()).toEqual([])
})
