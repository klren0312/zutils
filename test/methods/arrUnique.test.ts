import {arrUnique} from '../../index'

test('test arrUnique', () => {
  const test: Array<any> = [1,'1', 'zzes', 1, 'zzes', undefined, null, NaN, undefined, null, NaN, 123, 'zzes']
  expect(arrUnique(test)).toEqual([1, "1", "zzes", undefined, null, NaN, 123])
})