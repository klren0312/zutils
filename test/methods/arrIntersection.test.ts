import { arrIntersection } from '../../index'

test('test arrIntersection, number array', () => {
  const source: Array<number> = [1, 2, 3, 4]
  const comparison: Array<number> = [3, 4, 54, 5]
  expect(arrIntersection(source, comparison)).toEqual([3, 4])
})

test('test arrIntersection, string array', () => {
  const source: Array<string> = ['a', 'b', 'c', 'dd']
  const comparison: Array<string> = ['b', 'cc', 'dd']
  expect(arrIntersection(source, comparison)).toEqual(['b', 'dd'])
})
