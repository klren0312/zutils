import { arrChunk } from '../../index'

test('test no array', () => {
  expect(arrChunk(null, 2)).toEqual([])
})

test('test size not > 0', () => {
  expect(arrChunk([1, 2, 3, 4], -1)).toEqual([])
})

test('test normal', () => {
  expect(arrChunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
})
