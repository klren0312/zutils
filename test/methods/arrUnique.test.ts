import {arrUnique, arrEqual} from '../../index'

test('test arrUnique', () => {
  const test: Array<any> = [1,'1', 'zzes', 1, 'zzes', undefined, null, NaN, undefined, null, NaN, 123, 'zzes']
  expect(arrEqual([ '1', 'zzes', 1, undefined, null, NaN, 123 ], arrUnique(test))).toBeTruthy()
  expect(arrUnique([1,4,5,2])).toEqual([1,4,5,2])
})