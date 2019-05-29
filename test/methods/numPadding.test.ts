import { numPadding } from '../../index'

test('test numPadding', () => {
  expect(numPadding(1, 3)).toBe('001')
})
