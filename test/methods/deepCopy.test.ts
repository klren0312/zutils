import { deepCopy } from '../../index'

test('test deepCopy', () => {
  let test1: string = 'a'
  expect(deepCopy(test1)).toEqual('a')
  let test2: object = {a: 1, b: 2}
  expect(JSON.stringify(deepCopy(test2))).toEqual(JSON.stringify({a: 1, b: 2}))
  let test3: {
    [index: string]: any
  } = {a: 1}
  test3.b = test3
  expect(() => JSON.stringify(deepCopy(test3))).toThrowError()
})