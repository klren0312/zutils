import { isJSON } from '../../index'

test('test isJSON', () => {
  expect(isJSON('{"test": 1}')).toBe(true)
  expect(isJSON('"test"')).toBe(false)
  expect(isJSON('null')).toBe(false)
  expect(isJSON('true')).toBe(false)
  expect(isJSON('test')).toBe(false)
  expect(isJSON({test: 1})).toBe(false)
})
