import {arrUnique} from '../../index'

test('test arrUnique', () => {
  const test = [1,'1', 'zzes', 1, 'zzes', undefined, null, NaN, undefined, null, NaN, 123, 'zzes']
  const res = arrUnique(test)
  expect(res).toEqual([1, "1", "zzes", undefined, null, NaN, 123])
})