import {byteFormat} from '../../index'

test('test byteFormat', () => {
  let testData = [0, 'test', 1024]
  expect(byteFormat(testData[0])).toEqual('0 Byte')
  expect(() => byteFormat(testData[1])).toThrowError()
  expect(byteFormat(testData[2])).toEqual('1 KB')
})