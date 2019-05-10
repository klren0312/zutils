import { deepCopy } from '../../index'

test('test deepCopy', () => {
  let test = 'a'
  expect(deepCopy(test)).toEqual('a')
  test = {a: 1, b: 2}
  expect(JSON.stringify(deepCopy(test))).toEqual(JSON.stringify({a: 1, b: 2}))
})