import { queryFormat } from '../../index'

test('test queryFormat', () => {
  expect(queryFormat({})).toBe('')
  expect(queryFormat([])).toBe('')
  expect(queryFormat({a: 1, b: 2, c: 3, d: undefined})).toBe('a=1&b=2&c=3')
})