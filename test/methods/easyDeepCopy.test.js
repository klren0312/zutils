import { easyDeepCopy } from '../../index'

test('test easydeepcopy', () => {
  expect(easyDeepCopy(1)).toBe(1)
  expect(easyDeepCopy({a:1})).toEqual({a:1})
})
